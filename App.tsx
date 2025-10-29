
import React, { useState, useCallback, useMemo } from 'react';
import { users, projects as mockProjects, tasks as mockTasks } from './data/mockData';
import { User, Project, Task, Status, Priority, Category } from './types';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TaskModal from './components/TaskModal';
import { PlusIcon } from './components/icons/PlusIcon';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleLogin = useCallback((userId: number) => {
    const user = users.find(u => u.id === userId);
    setCurrentUser(user || null);
  }, []);

  const handleLogout = useCallback(() => {
    setCurrentUser(null);
  }, []);

  const handleSaveTask = (task: Task) => {
    if (task.id) {
      setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    } else {
      const newTask = { ...task, id: Date.now() };
      setTasks([...tasks, newTask]);
    }
    closeModal();
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };
  
  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };
  
  const openNewTaskModal = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const teamMembers = useMemo(() => users.filter(u => u.role !== 'Admin'), []);

  if (!currentUser) {
    return <Login users={users} onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={currentUser} onLogout={handleLogout} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4 md:p-8">
          <Dashboard
            tasks={tasks}
            projects={projects}
            users={users}
            onEditTask={handleEditTask}
            onDeleteTask={handleDeleteTask}
          />
        </main>
      </div>

      <button
        onClick={openNewTaskModal}
        className="fixed bottom-8 right-8 bg-primary hover:bg-primary-dark text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        aria-label="Add new task"
      >
        <PlusIcon className="w-8 h-8" />
      </button>

      {isModalOpen && (
        <TaskModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSave={handleSaveTask}
          task={editingTask}
          projects={projects}
          users={teamMembers}
        />
      )}
    </div>
  );
};

export default App;

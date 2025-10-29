
import React from 'react';
import { Task, Project, User, Status } from '../types';
import TaskList from './TaskList';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

interface DashboardProps {
  tasks: Task[];
  projects: Project[];
  users: User[];
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
}

const statusColors: { [key in Status]: string } = {
    [Status.ToDo]: '#3B82F6', // blue
    [Status.InProgress]: '#F59E0B', // amber
    [Status.Done]: '#10B981', // emerald
    [Status.Pending]: '#6B7280', // gray
};


const Dashboard: React.FC<DashboardProps> = ({ tasks, projects, users, onEditTask, onDeleteTask }) => {
  const today = new Date().toISOString().split('T')[0];
  const todaysTasks = tasks.filter(t => t.dueDate === today && t.status !== Status.Done);
  const upcomingTasks = tasks.filter(t => t.dueDate > today && t.status !== Status.Done);
  const completedTasksCount = tasks.filter(t => t.status === Status.Done).length;
  
  const tasksByStatus = Object.values(Status).map(status => ({
      name: status,
      count: tasks.filter(task => task.status === status).length
  }));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-gray-600">Here's a summary of your team's activity.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Today's Tasks</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">{todaysTasks.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Upcoming Tasks</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">{upcomingTasks.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Total Projects</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">{projects.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-sm font-medium text-gray-500">Completed Tasks</h3>
          <p className="mt-2 text-3xl font-bold text-gray-900">{completedTasksCount}</p>
        </div>
      </div>
      
      {/* Task Chart and Project List */}
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
               <h3 className="text-lg font-semibold text-gray-900 mb-4">Tasks by Status</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={tasksByStatus} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <XAxis dataKey="name" tick={{ fill: '#6B7280', fontSize: 12 }} />
                        <YAxis tick={{ fill: '#6B7280', fontSize: 12 }} />
                        <Tooltip cursor={{fill: 'rgba(243, 244, 246, 0.5)'}} contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }}/>
                        <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                            {tasksByStatus.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={statusColors[entry.name as Status]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
             <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Projects</h3>
              <ul className="space-y-4">
                  {projects.map(project => (
                      <li key={project.id} className="p-4 bg-gray-50 rounded-md">
                          <p className="font-semibold text-primary">{project.name}</p>
                          <p className="text-sm text-gray-500 truncate">{project.description}</p>
                      </li>
                  ))}
              </ul>
          </div>
       </div>

      {/* Task List Section */}
      <TaskList
        title="All Tasks"
        tasks={tasks}
        users={users}
        onEdit={onEditTask}
        onDelete={onDeleteTask}
      />
    </div>
  );
};

export default Dashboard;


import React, { useState } from 'react';
import { DashboardIcon } from './icons/DashboardIcon';
import { TasksIcon } from './icons/TasksIcon';
import { ProjectsIcon } from './icons/ProjectsIcon';
import { SettingsIcon } from './icons/SettingsIcon';
import { LogoIcon } from './icons/LogoIcon';

const Sidebar: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const navItems = [
        { icon: <DashboardIcon className="w-6 h-6" />, name: 'Dashboard' },
        { icon: <TasksIcon className="w-6 h-6" />, name: 'Tasks' },
        { icon: <ProjectsIcon className="w-6 h-6" />, name: 'Projects' },
        { icon: <SettingsIcon className="w-6 h-6" />, name: 'Settings' },
    ];
    
    // In a real app, you would use a router to handle navigation.
    // For this demo, we'll just highlight the active link.
    const [activeItem, setActiveItem] = useState('Dashboard');

    return (
        <nav className="flex flex-col bg-dark text-white w-64 p-4 space-y-8 transition-all duration-300">
            <div className="flex items-center space-x-2 px-2">
                <LogoIcon className="h-10 w-10 text-primary" />
                <span className="text-xl font-bold">IT Manager</span>
            </div>
            
            <div className="flex-1">
                <ul className="space-y-2">
                    {navItems.map(item => (
                        <li key={item.name}>
                            <a
                                href="#"
                                onClick={() => setActiveItem(item.name)}
                                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                                    activeItem === item.name 
                                    ? 'bg-primary text-white' 
                                    : 'text-gray-300 hover:bg-dark-secondary hover:text-white'
                                }`}
                            >
                                {item.icon}
                                <span className="font-medium">{item.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="border-t border-gray-700 pt-4">
                 <p className="text-xs text-gray-500 text-center">&copy; 2024 IT Solutions Inc.</p>
            </div>
        </nav>
    );
};

export default Sidebar;


import React from 'react';
import { User } from '../types';
import { LogoutIcon } from './icons/LogoutIcon';
import { SearchIcon } from './icons/SearchIcon';

interface HeaderProps {
  user: User;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div className="relative w-full max-w-xs">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search tasks or projects..."
          className="block w-full bg-gray-100 border border-gray-200 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary"
        />
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
            <div>
                <div className="font-semibold text-gray-800">{user.name}</div>
                <div className="text-sm text-gray-500">{user.role}</div>
            </div>
        </div>
        <button
          onClick={onLogout}
          className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          aria-label="Logout"
        >
          <LogoutIcon className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;

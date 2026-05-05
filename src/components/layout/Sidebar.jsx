import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
    { name: 'Products', icon: 'inventory_2', path: '/products' },
    { name: 'In/Out', icon: 'swap_vertical_circle', path: '/in-out' },
    { name: 'Transfers', icon: 'compare_arrows', path: '/transfers' },
    { name: 'Audit', icon: 'rule', path: '/audit' },
    { name: 'Reports', icon: 'analytics', path: '/reports' },
    { name: 'Settings', icon: 'settings', path: '/settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-[240px] bg-[#1E56A0] border-r border-blue-800 flex flex-col py-6 px-4 z-50">
      <div className="mb-10 px-2">
        <h1 className="text-xl font-bold text-white tracking-tight font-headline-xl">InventoryPro</h1>
        <p className="text-blue-100/60 text-xs font-medium">Enterprise Management</p>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 transition-all duration-200 ${
                isActive
                  ? 'bg-white/10 border-l-4 border-white text-white font-bold'
                  : 'text-blue-100/70 hover:text-white hover:bg-white/5 border-l-4 border-transparent'
              }`}
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Profile Section */}
      <div className="mt-auto px-2 pt-4 border-t border-blue-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-400 overflow-hidden">
            <img 
              alt="Profile" 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" 
            />
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-white text-xs font-bold truncate">Alex Sterling</p>
            <p className="text-blue-100/50 text-[10px] truncate">Admin Access</p>
          </div>
          <span className="material-symbols-outlined text-white/50 text-sm cursor-pointer hover:text-white">logout</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
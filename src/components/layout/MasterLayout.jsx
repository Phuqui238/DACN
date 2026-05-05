import React from 'react';
import Sidebar from './Sidebar';
import TopHeader from './TopHeader';
import { Outlet } from 'react-router-dom'; // 1. Thêm import Outlet

const MasterLayout = () => { // 2. Xóa bỏ { children } ở đây
  return (
    <div className="bg-slate-50 min-h-screen">
      <Sidebar />
      <TopHeader />
      <main className="ml-[240px] pt-24 pb-8 px-6 min-h-screen">
        <Outlet /> {/* 3. Đổi {children} thành <Outlet /> */}
      </main>
    </div>
  );
};

export default MasterLayout;
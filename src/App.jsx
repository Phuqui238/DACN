import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MasterLayout from './components/layout/MasterLayout'; // Nhớ import MasterLayout (sửa lại đường dẫn nếu file nằm khác thư mục)
import DashboardScreen from './screens/DashboardScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route cha: Load cái khung MasterLayout */}
        <Route path="/" element={<MasterLayout />}>
          
          {/* Các Route con: Sẽ tự động nhảy vào chỗ <Outlet /> */}
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardScreen />} />
          <Route path="products" element={<ProductScreen />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
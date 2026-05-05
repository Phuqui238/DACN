import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MasterLayout from './components/layout/MasterLayout';
import DashboardScreen from './screens/DashboardScreen';
import ProductScreen from './screens/ProductScreen';
import InOutScreen from './screens/InOutScreen';
import CreateOutboundScreen from './screens/CreateOutboundScreen';
import CreateInboundScreen from './screens/CreateInboundScreen'; // Import thêm file Inbound

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
          
          {/* Group In/Out Management */}
          <Route path="in-out">
            <Route index element={<InOutScreen />} />
            {/* Create Outbound - Xuất kho */}
            <Route path="create" element={<CreateOutboundScreen />} />
            {/* Create Inbound - Nhập kho */}
            <Route path="create-inbound" element={<CreateInboundScreen />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

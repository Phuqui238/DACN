import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MasterLayout from './components/layout/MasterLayout';
import DashboardScreen from './screens/DashboardScreen';
import ProductScreen from './screens/ProductScreen';
import TransferScreen from './screens/TransferScreen';
import InOutScreen from './screens/InOutScreen';
import CreateOutboundScreen from './screens/CreateOutboundScreen';
import CreateInboundScreen from './screens/CreateInboundScreen'; // Import thêm file Inbound

import CreateTransferScreen from './screens/CreateTransferScreen';
import SettingsScreen from './screens/SettingsScreen';
import AuditScreen from './screens/AuditScreen';
import ReportsScreen from './screens/ReportsScreen';
import ProfileScreen from './screens/ProfileScreen';
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
          <Route path="transfers" element={<TransferScreen />}/>
          <Route path="in-out" element={<InOutScreen />} />
          <Route path="transfers/create" element={<CreateTransferScreen />} />
          <Route path="settings" element={<SettingsScreen />} />
          <Route path="audit" element={<AuditScreen />} />
          <Route path="reports" element={<ReportsScreen />} />
          <Route path="profile" element={<ProfileScreen />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

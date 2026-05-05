import React from 'react';

const DashboardScreen = () => {
  return (
    <>
      {/* 1. KPI Row: Thống kê nhanh */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Total Stock</p>
            <h3 className="text-2xl font-bold text-slate-900">1,250 <span className="text-xs font-normal text-slate-400">units</span></h3>
          </div>
          <div className="w-10 h-10 bg-blue-50 text-[#1E56A0] rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined">inventory</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Inventory Value</p>
            <h3 className="text-2xl font-bold text-slate-900">$45,200</h3>
          </div>
          <div className="w-10 h-10 bg-green-50 text-green-600 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined">payments</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Monthly Inbound</p>
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-slate-900">+420</h3>
              <span className="text-[10px] font-bold px-1.5 py-0.5 bg-green-100 text-green-700 rounded-full">↑ 12%</span>
            </div>
          </div>
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined">vertical_align_bottom</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] border border-slate-100 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">Monthly Outbound</p>
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-slate-900">-310</h3>
              <span className="text-[10px] font-bold px-1.5 py-0.5 bg-orange-100 text-orange-700 rounded-full">↓ 5%</span>
            </div>
          </div>
          <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined">vertical_align_top</span>
          </div>
        </div>
      </div>

      {/* 2. Middle Row: Biểu đồ và Hàng sắp hết hạn */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white p-5 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h4 className="font-bold text-slate-900 text-lg">In/Out Volume</h4>
              <p className="text-xs text-slate-500">Inventory movement over the last 7 days</p>
            </div>
            <select className="text-xs bg-slate-50 border border-slate-200 rounded-md py-1 px-2 focus:ring-[#1E56A0] outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="flex-1 min-h-[220px] relative flex items-end justify-between gap-2 pt-4">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <div key={day} className="flex flex-col items-center gap-1 w-full h-full justify-end group">
                <div className="w-full flex justify-center gap-1 items-end h-[60%]">
                  <div className={`w-4 bg-emerald-400 rounded-t opacity-80`} style={{ height: `${Math.floor(Math.random() * 60) + 20}%`}}></div>
                  <div className={`w-4 bg-red-400 rounded-t opacity-80`} style={{ height: `${Math.floor(Math.random() * 40) + 10}%`}}></div>
                </div>
                <span className="text-[10px] text-slate-400 font-bold">{day}</span>
              </div>
            ))}
            <div className="absolute inset-0 pt-16 pointer-events-none">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,80 Q15,40 30,50 T60,20 T100,60" fill="none" stroke="#1E56A0" strokeWidth="1" opacity="0.3"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Expiring Soon */}
        <div className="bg-white p-5 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-slate-900">Expiring Soon</h4>
            <span className="text-[10px] font-bold px-2 py-0.5 bg-red-100 text-red-600 rounded-full">4 Critical</span>
          </div>
          <div className="space-y-2 overflow-y-auto max-h-[260px] flex-1 pr-1 custom-scrollbar">
            <div className="flex items-center gap-3 p-2 bg-slate-50/50 rounded-lg border border-slate-100">
              <div className="w-10 h-10 bg-slate-200 rounded overflow-hidden flex-shrink-0">
                <img alt="Product" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-800 truncate">Processor XC-900</p>
                <p className="text-[10px] text-slate-500">Batch #90210</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-red-600">Expires: Oct 24</p>
                <p className="text-[10px] text-slate-400">3 days left</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 bg-slate-50/50 rounded-lg border border-slate-100">
              <div className="w-10 h-10 bg-slate-200 rounded overflow-hidden flex-shrink-0">
                <img alt="Product" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=100&h=100&fit=crop" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-800 truncate">Lithium Cell 20V</p>
                <p className="text-[10px] text-slate-500">Batch #77432</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-orange-600">Expires: Nov 02</p>
                <p className="text-[10px] text-slate-400">12 days left</p>
              </div>
            </div>
          </div>
          <button className="mt-4 w-full py-2 bg-slate-50 text-[#1E56A0] text-xs font-bold rounded-lg hover:bg-blue-50 transition-colors">View All Expirations</button>
        </div>
      </div>

      {/* 3. Bottom Row: Bảng tồn kho và Hoạt động gần đây */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Stocked Table */}
        <div className="bg-white p-5 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] border border-slate-100">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-slate-900">Top 10 Most Stocked</h4>
            <span className="material-symbols-outlined text-slate-400 text-sm cursor-pointer">more_horiz</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50">
                <tr>
                  <th className="py-2 px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider rounded-l-lg">Item Name</th>
                  <th className="py-2 px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider">Category</th>
                  <th className="py-2 px-3 text-[10px] font-bold text-slate-500 uppercase tracking-wider text-right rounded-r-lg">Current Count</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: 'Connector RJ-45', category: 'Network Hardware', count: '4,200' },
                  { name: 'Cat6 Cable (100m)', category: 'Network Hardware', count: '2,850' },
                  { name: 'HDMI Adapter 4K', category: 'Display Accessories', count: '1,200' },
                  { name: 'Wireless Mouse M2', category: 'Peripherals', count: '980' },
                ].map((item, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="py-2 px-3">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        <span className="text-xs font-bold text-slate-800">{item.name}</span>
                      </div>
                    </td>
                    <td className="py-2 px-3 text-xs text-slate-500">{item.category}</td>
                    <td className="py-2 px-3 text-xs font-bold text-slate-800 text-right">{item.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-5 rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-slate-900">Recent Activities</h4>
            <button className="text-[10px] font-bold text-[#1E56A0] hover:underline">View History</button>
          </div>
          <div className="space-y-4 overflow-y-auto max-h-[200px] flex-1 pr-1 custom-scrollbar">
            <div className="flex items-start gap-3 relative pl-4 border-l-2 border-slate-100">
              <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-green-500"></div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="text-xs font-bold text-slate-800">Stock In</p>
                  <span className="text-[10px] text-slate-400">10:45 AM</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">24 units of <span className="font-bold">MacBook Pro 14"</span> received from Vendor GlobalTech.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 relative pl-4 border-l-2 border-slate-100">
              <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-red-500"></div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="text-xs font-bold text-slate-800">Stock Out</p>
                  <span className="text-[10px] text-slate-400">09:12 AM</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">100 units of <span className="font-bold">RJ-45 Connectors</span> dispatched for Order #4459.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 relative pl-4 border-l-2 border-slate-100">
              <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-blue-500"></div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="text-xs font-bold text-slate-800">Stock Adjustment</p>
                  <span className="text-[10px] text-slate-400">Yesterday</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1">Audit correction for <span className="font-bold">Warehouse Bin A4</span>. +2 variance found.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 bg-[#1E56A0] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
        </button>
      </div>
    </>
  );
};

export default DashboardScreen;
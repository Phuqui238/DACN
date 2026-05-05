import React from "react";
import MasterLayout from '../components/layout/MasterLayout';

const ProductScreen = () => {
  return (
    <div className="p-6 min-h-screen bg-[#F4F7FE]">
      {/* Filter Bar Section */}
      <section className="mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <span
                className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm"
                data-icon="filter_list"
              >
                filter_list
              </span>
              <input
                className="bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary w-64"
                placeholder="Filter by Name or SKU..."
                type="text"
              />
            </div>
            <select className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary min-w-[140px] text-slate-600">
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="machinery">Heavy Machinery</option>
              <option value="office">Office Supplies</option>
              <option value="storage">Storage Solutions</option>
            </select>
            <select className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary min-w-[140px] text-slate-600">
              <option value="">All Statuses</option>
              <option value="safe">Safe Stock</option>
              <option value="low">Low Stock</option>
              <option value="out">Out of Stock</option>
            </select>
            <button className="px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg border border-slate-200 text-sm font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-sm" data-icon="refresh">
                refresh
              </span>
              Reset
            </button>
          </div>
          <button className="bg-[#1E56A0] text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-md hover:bg-primary transition-all flex items-center gap-2">
            <span className="material-symbols-outlined" data-icon="add">
              add
            </span>
            Add New Product
          </button>
        </div>
      </section>

      {/* Data Table Section */}
      <section className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full border border-slate-200">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 font-label-sm text-slate-500 uppercase tracking-wider">Thumbnail</th>
                <th className="px-6 py-4 font-label-sm text-slate-500 uppercase tracking-wider">SKU Code</th>
                <th className="px-6 py-4 font-label-sm text-slate-500 uppercase tracking-wider">Product Name</th>
                <th className="px-6 py-4 font-label-sm text-slate-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 font-label-sm text-slate-500 uppercase tracking-wider text-right">Stock Qty</th>
                <th className="px-6 py-4 font-label-sm text-slate-500 uppercase tracking-wider text-center">Status</th>
                <th className="px-6 py-4 font-label-sm text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {/* Product Row 1 */}
              <tr className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-3">
                  <div className="w-10 h-10 rounded-md bg-slate-100 overflow-hidden border border-slate-200">
                    <img alt="Product Thumbnail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABTJpzeNUiK4BjruHokuIMzDn8MTUA6tHp3-xHPk8H4mhSIT_3GIEu6eIbLDbt9mkUadPj_iCZjprEc9OmU5jflLznx9WaFkBnNMZ_3KXVeo-kvwnmkbaCllt6iXJjXnxqTUJRcLd4O0W_VR0EoYosLQ96BMJ8KUVRE1YpF6k9P-TZoFjJ4UVGyEJC0jJbrfbrNlFqqtEC4oqyWAfakQlpxHlZhPIn8TzCfEQqKubKz6jd_QlRtI8OZTHjuMD7M9dOkbW0W8K58_8i" />
                  </div>
                </td>
                <td className="px-6 py-3 font-mono text-xs font-semibold text-primary">PROD-X782</td>
                <td className="px-6 py-3">
                  <span className="font-headline-sm text-slate-900">Lumix Cine 4K Lens</span>
                </td>
                <td className="px-6 py-3">
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full font-medium">Electronics</span>
                </td>
                <td className="px-6 py-3 text-right">
                  <span className="font-headline-sm">
                    1,240 <span className="text-[10px] text-slate-400 font-normal">units</span>
                  </span>
                </td>
                <td className="px-6 py-3 text-center">
                  <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-xs font-bold border border-green-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Safe
                  </span>
                </td>
                <td className="px-6 py-3 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded transition-colors">
                      <span className="material-symbols-outlined text-sm" data-icon="edit">edit</span>
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-error hover:bg-error/10 rounded transition-colors">
                      <span className="material-symbols-outlined text-sm" data-icon="delete">delete</span>
                    </button>
                  </div>
                </td>
              </tr>

              {/* Product Row 2 */}
              <tr className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-3">
                  <div className="w-10 h-10 rounded-md bg-slate-100 overflow-hidden border border-slate-200">
                    <img alt="Product Thumbnail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6hcJtH0YnvtA4G6fFnUX9fI15QWddOhJTVM2xJij20RWO-M9ZgxZG4p_F4bFKd1WXdZLLW18vhotzhSg9YPJ-1_z4QrwzYXIglHYDAzgkbMwIgKi4r_M8rNyWyPWu4BB7Opip5qkuQb_G19_ChMHQQe3DLo2Txqv0-6MH2rsSIWGvpDEsyTTxWb9Dft1wokLCJOE2C42wSLHwWLQsxdCtAoxM6-aEJjHKUlhfALSmtZCT6rI5_JZjwWOEF_UyghTyz_WdTzSEfvV8" />
                  </div>
                </td>
                <td className="px-6 py-3 font-mono text-xs font-semibold text-primary">PROD-S210</td>
                <td className="px-6 py-3">
                  <span className="font-headline-sm text-slate-900">Sprint Elite v2 Shoe</span>
                </td>
                <td className="px-6 py-3">
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full font-medium">Apparel</span>
                </td>
                <td className="px-6 py-3 text-right">
                  <span className="font-headline-sm text-error">
                    12 <span className="text-[10px] text-slate-400 font-normal">units</span>
                  </span>
                </td>
                <td className="px-6 py-3 text-center">
                  <span className="inline-flex items-center gap-1 bg-red-50 text-red-700 px-2.5 py-1 rounded-full text-xs font-bold border border-red-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    Low Stock
                  </span>
                </td>
                <td className="px-6 py-3 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded transition-colors">
                      <span className="material-symbols-outlined text-sm" data-icon="edit">edit</span>
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-error hover:bg-error/10 rounded transition-colors">
                      <span className="material-symbols-outlined text-sm" data-icon="delete">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
              
              {/* Other rows omitted for brevity, adding the last one as example */}
              <tr className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-6 py-3">
                  <div className="w-10 h-10 rounded-md bg-slate-100 overflow-hidden border border-slate-200">
                    <img alt="Product Thumbnail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSgWFtGthtIJqWACafQtNkcAaixNS_Qw_zP-ILua0CEwyTu1_4C2zvvmpnCkCquIiYAJ-gpZjioxKFuRr0ZuOXaNMyUdedfsrtVkpvj77YyDBQzkTr7MuCseyFQQUB6B-5vezjHiGLY-2a0MAbFeK4bkegu8Cy74q9CXq8uoa2FLYgckA9LoXFTa83pRDP3WIq9ypMicTeyn77y6qE61XpMDS7rsfoTFFvedRuZWNVCBz_OKKkiG9F8QWuCgtMonRYIHYOEod-PTCF" />
                  </div>
                </td>
                <td className="px-6 py-3 font-mono text-xs font-semibold text-primary">PROD-A004</td>
                <td className="px-6 py-3">
                  <span className="font-headline-sm text-slate-900">Black Horizon Shades</span>
                </td>
                <td className="px-6 py-3">
                  <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full font-medium">Accessories</span>
                </td>
                <td className="px-6 py-3 text-right">
                  <span className="font-headline-sm">
                    2,100 <span className="text-[10px] text-slate-400 font-normal">units</span>
                  </span>
                </td>
                <td className="px-6 py-3 text-center">
                  <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-xs font-bold border border-green-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Safe
                  </span>
                </td>
                <td className="px-6 py-3 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded transition-colors">
                      <span className="material-symbols-outlined text-sm" data-icon="edit">edit</span>
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-error hover:bg-error/10 rounded transition-colors">
                      <span className="material-symbols-outlined text-sm" data-icon="delete">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Pagination */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">
            Showing <span className="text-slate-900">1 to 5</span> of <span className="text-slate-900">128</span> entries
          </p>
          <div className="flex items-center gap-1">
            <button className="p-1.5 rounded border border-slate-200 bg-white text-slate-400 hover:bg-slate-50 disabled:opacity-50" disabled>
              <span className="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span>
            </button>
            <button className="w-8 h-8 rounded bg-primary text-white text-xs font-bold">1</button>
            <button className="w-8 h-8 rounded bg-white text-slate-600 border border-slate-200 text-xs font-medium hover:bg-slate-50">2</button>
            <button className="w-8 h-8 rounded bg-white text-slate-600 border border-slate-200 text-xs font-medium hover:bg-slate-50">3</button>
            <span className="px-1 text-slate-400">...</span>
            <button className="w-8 h-8 rounded bg-white text-slate-600 border border-slate-200 text-xs font-medium hover:bg-slate-50">26</button>
            <button className="p-1.5 rounded border border-slate-200 bg-white text-slate-400 hover:bg-slate-50">
              <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Overview Cards */}
      <section className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined" data-icon="inventory_2" style={{ fontVariationSettings: "'FILL' 1" }}>
              inventory_2
            </span>
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Products</p>
            <h3 className="text-xl font-black text-slate-900">4,281</h3>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
            <span className="material-symbols-outlined" data-icon="trending_up">trending_up</span>
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">In Stock</p>
            <h3 className="text-xl font-black text-slate-900">3,902</h3>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
            <span className="material-symbols-outlined" data-icon="priority_high">priority_high</span>
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Low Stock</p>
            <h3 className="text-xl font-black text-slate-900">342</h3>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-600">
            <span className="material-symbols-outlined" data-icon="block">block</span>
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Out of Stock</p>
            <h3 className="text-xl font-black text-slate-900">37</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductScreen;
import { useState } from "react";

export default function InOutScreen() {
  const [tab, setTab] = useState("in");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const data = [
    {
      id: "RE-2023-001",
      date: "Oct 24, 2023",
      creator: "Michael Scott",
      warehouse: "Main Warehouse",
      items: 45,
      total: 12450,
      status: "Completed",
      type: "in",
    },
    {
      id: "RE-2023-002",
      date: "Oct 25, 2023",
      creator: "Jim Halpert",
      warehouse: "Secondary DC",
      items: 112,
      total: 4200,
      status: "Pending",
      type: "out",
    },
    {
      id: "RE-2023-003",
      date: "Oct 26, 2023",
      creator: "Pam Beesly",
      warehouse: "Main Warehouse",
      items: 8,
      total: 850,
      status: "Draft",
      type: "in",
    },
  ];

  // FILTER
  const filteredData = data.filter((item) => {
    return (
      item.type === tab &&
      item.id.toLowerCase().includes(search.toLowerCase()) &&
      (status === "All" || item.status === status)
    );
  });

  const statusStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Draft":
        return "bg-gray-100 text-gray-500";
      default:
        return "";
    }
  };

  return (
    <div>
      {/* HEADER */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex bg-white rounded-lg p-1 shadow-sm border">
          <button
            onClick={() => setTab("in")}
            className={`px-6 py-2 rounded-md font-bold flex items-center gap-2 ${
              tab === "in"
                ? "bg-[#1E56A0] text-white"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            <span className="material-symbols-outlined">call_received</span>
            Inbound
          </button>

          <button
            onClick={() => setTab("out")}
            className={`px-6 py-2 rounded-md font-bold flex items-center gap-2 ${
              tab === "out"
                ? "bg-[#1E56A0] text-white"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            <span className="material-symbols-outlined">call_made</span>
            Outbound
          </button>
        </div>

        <button className="bg-[#1E56A0] text-white px-5 py-2 rounded-lg shadow flex items-center gap-2">
          <span className="material-symbols-outlined">add</span>
          Create Receipt
        </button>
      </div>

      {/* FILTER */}
      <div className="bg-white p-4 rounded-lg shadow-sm border mb-6 flex flex-wrap gap-4">
        <input
          placeholder="Search Receipt ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        >
          <option>All</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Draft</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4">Receipt ID</th>
              <th>Date</th>
              <th>Creator</th>
              <th>Warehouse</th>
              <th className="text-center">Items</th>
              <th className="text-right">Total</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((row) => (
              <tr key={row.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4 text-[#1E56A0] font-bold">
                  {row.id}
                </td>
                <td>{row.date}</td>
                <td>{row.creator}</td>
                <td>{row.warehouse}</td>
                <td className="text-center">{row.items}</td>
                <td className="text-right font-bold">
                  ${row.total.toLocaleString()}
                </td>
                <td>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-bold ${statusStyle(
                      row.status
                    )}`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* EMPTY */}
        {filteredData.length === 0 && (
          <div className="p-6 text-center text-gray-500">
            No data found
          </div>
        )}
      </div>

      {/* SUMMARY */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <p className="text-gray-500 text-sm">Inbound Today</p>
          <h2 className="text-xl font-bold">42</h2>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <p className="text-gray-500 text-sm">Pending</p>
          <h2 className="text-xl font-bold">15</h2>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <p className="text-gray-500 text-sm">Items</p>
          <h2 className="text-xl font-bold">1,240</h2>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm border">
          <p className="text-gray-500 text-sm">Total Value</p>
          <h2 className="text-xl font-bold">$142k</h2>
        </div>
      </div>
    </div>
  );
}
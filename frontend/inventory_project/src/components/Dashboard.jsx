import React from "react";
import AddItemForm from "./AddItemForm";
function Dashboard() {
  return (
    <div className="flex min-h-screen w-screen bg-gray-100 overflow-x-hidden">

      {/* Main content */}
      <div className="flex-1 p-6 w-full">

        {/* Navbar */}
        <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
            
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Log Out
            </button>
        </header>
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-gray-600">Total Machines</h3>
            <p className="text-4xl font-bold mt-2">52</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-gray-600">Machines in Use</h3>
            <p className="text-4xl font-bold mt-2">37</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-gray-600">Under Maintenance</h3>
            <p className="text-4xl font-bold mt-2 text-yellow-600">5</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-gray-600">Critical Issues</h3>
            <p className="text-4xl font-bold mt-2 text-red-600">2</p>
          </div>

        </div>

        {/* Activity */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-md w-full">
          <h2 className="text-2xl font-bold mb-4">Recent Machine Activity</h2>
          <ul className="space-y-3 text-gray-700">
            <li>⚙️ Machine <b>#M-102</b> scheduled for maintenance</li>
            <li>🔧 Machine <b>#M-088</b> repaired</li>
            <li>❗ Machine <b>#M-021</b> reported overheating</li>
            <li>🟢 Machine <b>#M-056</b> assigned to Line 2</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;

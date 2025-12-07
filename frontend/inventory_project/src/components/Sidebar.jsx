import { Link, useLocation } from "react-router-dom";
import { Home, PlusCircle, Settings, List, ClipboardList } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const linkClasses = (path) =>
    `flex items-center px-4 py-3 rounded-xl cursor-pointer transition 
     ${location.pathname === path ? "bg-gradient-to-r from-blue-400 to-blue-600 text-white"
                                   : "text-gray-700 hover:bg-gray-200"} 
    `;

  return (
    <div className="w-64 h-screen bg-white shadow-xl flex flex-col py-6 gap-2">
      <Link to="/dashboard" className={linkClasses("/dashboard")}>
        <Home className="mr-3" size={20} />
        Dashboard
      </Link>

      <Link to="/machines" className={linkClasses("/machines")}>
        <List className="mr-3" size={20} />
        Machines
      </Link>

      <Link to="/maintenance" className={linkClasses("/maintenance")}>
        <Settings className="mr-3" size={20} />
        Maintenance
      </Link>

      <Link to="/add-machine" className={linkClasses("/add-machine")}>
        <PlusCircle className="mr-3" size={20} />
        Add Machine
      </Link>

      <Link to="/logs" className={linkClasses("/logs")}>
        <ClipboardList className="mr-3" size={20} />
        Machine Logs
      </Link>
    </div>
  );
}

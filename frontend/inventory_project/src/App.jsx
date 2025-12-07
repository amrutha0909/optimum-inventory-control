import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard'
import AddMachines from "./components/AddMachines";
import Machines from "./components/Machines";
import Logs from "./components/Logs";
import Maintenance from "./components/Maintenance";
import MainLayout from "./layout/MainLayout";

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-machine" element={<AddMachines />} />
          <Route path="/machines" element={<Machines />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/logs" element={<Logs />} /> 
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

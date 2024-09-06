import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Vehicles } from "./pages/vehicles";
import { Login } from "./pages/login";
import { Registration } from "./pages/registration";
export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>oi</div>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Registration/>} />
        
        <Route path="/veiculos" element={<Vehicles/>} />
        <Route path="/vendas" element={<div>oi</div>} />
        <Route path="*" element={<div>erro</div>} />
      </Routes>
    </BrowserRouter>
  );
  
}


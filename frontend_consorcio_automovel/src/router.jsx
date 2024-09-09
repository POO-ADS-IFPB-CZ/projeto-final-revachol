import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Vehicles } from "./pages/vehicles";
import { Login } from "./pages/login";
import { RegistrationClient } from "./pages/registration-client";
import { RegistrationEmployee } from "./pages/registration-employee";
import { Home } from "./pages/home";
import { Sales } from "./pages/sales";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro-cliente" element={<RegistrationClient/>} />
        <Route path="/cadastro-funcionario" element={<RegistrationEmployee/>} />
        
        <Route path="/veiculos" element={<Vehicles/>} />
        <Route path="/vendas" element={<Sales />} />
        <Route path="*" element={<div>erro</div>} />
      </Routes>
    </BrowserRouter>
  );
  
}


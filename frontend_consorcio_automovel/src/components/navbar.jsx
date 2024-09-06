import { Anchor } from "./anchor";
import { ToggleContext } from "../contexts/toggle";
import { useContext } from "react";

import { CarFront, House, LogIn, LogOut, ShoppingCart, UserPlus } from "lucide-react";

export function Navbar() {
  const { navbarRef } = useContext(ToggleContext)
  const links = [
    { link: '/', label: 'Inicio', icon:<House size={16} strokeWidth={1.8}/> },
    { link: '/veiculos', label: 'Veículos', icon:<CarFront size={16} strokeWidth={1.8}/> },
    { link: '/vendas', label: 'Vendas', icon:<ShoppingCart size={16} strokeWidth={1.8}/> },
    { link: '/login', label: 'Login', icon:<LogIn size={16} strokeWidth={1.8}/> },
    { link: '/cadastro', label: 'Cadastro', icon:<UserPlus size={16} strokeWidth={1.8}/> },
    { link: '/', label: 'Sair', icon:<LogOut size={16} strokeWidth={1.8}/> },
  ]

  return (
    <nav
      ref={navbarRef}
      className="hidden w-full relative sm:flex sm:static">
      <div
        className="absolute bg-slate-200 -top-4 w-full flex flex-col p-4 gap-4 sm:static sm:flex-row sm:justify-center">
        {links.map(link => (
          <Anchor 
            key={link.label} 
            link={link.link}
            icon={link.icon}>
              {link.label}
          </Anchor>
        ))}
      </div>
    </nav>
  );
}

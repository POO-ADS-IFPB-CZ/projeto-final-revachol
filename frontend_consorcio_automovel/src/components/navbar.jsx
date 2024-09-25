import { Anchor } from "./anchor";
import { ToggleContext } from "../contexts/toggle";
import { useContext } from "react";
import { useAuth } from "../contexts/authContext";
import { CarFront, House, LogIn, LogOut, ShoppingCart, UserPlus, User } from "lucide-react";

export function Navbar() {
  const {user} = useAuth(); 
  const { navbarRef } = useContext(ToggleContext)
  let links = [];

  if (user?.isStaff) {
    links = [
      { link: '/', label: 'Inicio', icon: <House size={16} strokeWidth={1.8}/> },
      { link: '/veiculos', label: 'Veículos', icon: <CarFront size={16} strokeWidth={1.8}/> },
      { link: '/vendas', label: 'Vendas', icon: <ShoppingCart size={16} strokeWidth={1.8}/> },
      { link: '/cadastro-cliente', label: 'Cadastro Cliente', icon: <UserPlus size={16} strokeWidth={1.8}/> },
      { link: '/clientes', label: 'Clientes', icon: <User size={16} strokeWidth={1.8}/> },
      { link: '/cadastro-funcionario', label: 'Cadastro Funcionário', icon: <UserPlus size={16} strokeWidth={1.8}/> },
      { link: '/logout', label: 'Sair', icon: <LogOut size={16} strokeWidth={1.8}/> },
    ];
  } else {
    links = [
      { link: '/', label: 'Inicio', icon: <House size={16} strokeWidth={1.8}/> },
      { link: '/veiculos', label: 'Veículos', icon: <CarFront size={16} strokeWidth={1.8}/> },
      { link: '/vendas', label: 'Vendas', icon: <ShoppingCart size={16} strokeWidth={1.8}/> },
      { link: '/clientes', label: 'Clientes', icon: <User size={16} strokeWidth={1.8}/> },
      { link: '/cadastro-cliente', label: 'Cadastro Cliente', icon: <UserPlus size={16} strokeWidth={1.8}/> },
      { link: '/logout', label: 'Sair', icon: <LogOut size={16} strokeWidth={1.8}/> },
    ];
  }

  const guestLinks = [
    { link: '/', label: 'Inicio', icon: <House size={16} strokeWidth={1.8}/> },
    { link: '/veiculos', label: 'Veículos', icon: <CarFront size={16} strokeWidth={1.8}/> },
    { link: '/login', label: 'Login', icon: <LogIn size={16} strokeWidth={1.8}/> }
  ];

  return (
    <nav
      ref={navbarRef}
      className="hidden w-full relative sm:flex sm:static z-10">
      <div
        className="absolute bg-slate-200 top-[1px] w-full flex flex-col p-4 gap-4 sm:static sm:flex-row sm:justify-center">
        {user ? links.map(link => (
          <Anchor 
            key={link.label} 
            link={link.link}
            icon={link.icon}>
              {link.label}
          </Anchor>
        )) :
        guestLinks.map(link => (
          <Anchor 
            key={link.label} 
            link={link.link}
            icon={link.icon}>
              {link.label}
          </Anchor>
        ))
        }

      </div>
    </nav>
  );
}

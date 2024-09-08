import { ToggleContext } from "../contexts/toggle";
import { useContext } from "react";

import { Menu, X } from "lucide-react";

import { twMerge } from "tailwind-merge";

export function Toggle() {
  const { handleToggleNavbar, isVisible } = useContext(ToggleContext);
  
  const backgroundColor = isVisible? "bg-slate-300": ""
  const className = twMerge("block rounded-sm p-1 sm:hidden text-primary", backgroundColor )
  return (
    <button 
    className={className}
    onClick={handleToggleNavbar}>
      {
        isVisible? 
        <X/> : 
        <Menu size={24} />
      } 
    </button>
  );
}

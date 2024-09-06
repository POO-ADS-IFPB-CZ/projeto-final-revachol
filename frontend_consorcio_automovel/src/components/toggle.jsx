import { ToggleContext } from "../contexts/toggle";
import { useContext } from "react";

import { Menu, X } from "lucide-react";

import { twMerge } from "tailwind-merge";

export function Toggle() {
  const { handleToggleNavbar, isVisible } = useContext(ToggleContext);
  
  const backgroundColor = isVisible? "bg-red-400": "bg-primary"
  const className = twMerge("block rounded-sm p-1 sm:hidden", backgroundColor )
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

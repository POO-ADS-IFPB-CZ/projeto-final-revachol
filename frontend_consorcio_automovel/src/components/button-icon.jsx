import { twMerge } from "tailwind-merge";

export function ButtonIcon({children, onClick, style}) {
  const newStyle = style && style=="danger"? "bg-red-500 hover:bg-red-400":"bg-primary hover:bg-indigo-500"
  return ( 
    <button 
      className={
        twMerge("flex gap-2 py-2 px-4 justify-center items-center text-secondary rounded text-sm", newStyle)}
      onClick={onClick}>
      {children}
    </button>

  );
}

import { Link } from "react-router-dom";

export function Anchor({link, icon, children}) {
  return ( 
    <Link 
    className="flex gap-1 items-center hover:text-primary"
    to={link}>
      {icon}
      {children}
    </Link>
   );
}

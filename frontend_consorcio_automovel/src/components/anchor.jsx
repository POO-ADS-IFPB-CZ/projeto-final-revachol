import { Link } from "react-router-dom";

export function Anchor({link, icon, children}) {
  return ( 
    <Link 
    className="flex gap-1 items-center"
    to={link}>
      {icon}
      {children}
    </Link>
   );
}

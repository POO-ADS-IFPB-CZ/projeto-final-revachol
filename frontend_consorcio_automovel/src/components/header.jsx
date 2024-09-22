import { InputHeader } from "./input-header";
import { Navbar } from "./navbar";
import { Toggle } from "./toggle";
import { ToggleProvider } from "../contexts/toggle";
import { useLocation } from "react-router-dom";

export function Header({onSearchChange}) {
  const location = useLocation()

  const handleInputChange = (event) => {
    const value = event.target.value;
    onSearchChange(value); 
  };

  const inputIsVisible = location.pathname == "/veiculos" || location.pathname == "/vendas" ? true: false
  return (
    <ToggleProvider>
      <header className="bg-slate-300">
        <div className="flex flex-col p-4 gap-4 border-b border-primary sm:flex-row sm:justify-between">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl text-primary font-medium">Chevrolates</h1>
            <Toggle />
          </div>
          {inputIsVisible && <InputHeader onChange={handleInputChange} placeholder={location.pathname}/>}
        </div>
        <Navbar />
      </header>
    </ToggleProvider>
  );
}

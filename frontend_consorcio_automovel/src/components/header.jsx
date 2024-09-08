import { InputHeader } from "./input-header";
import { Navbar } from "./navbar";
import { Toggle } from "./toggle";
import { ToggleProvider } from "../contexts/toggle";
import { useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation()

  const inputIsVisible = location.pathname == "/veiculos" || location.pathname == "/vendas" ? true: false
  return (
    <ToggleProvider>
      <header className="bg-slate-200">
        <div className="flex flex-col p-4 gap-4 sm:flex-row sm:justify-between">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl text-primary font-medium">Nome do site</h1>
            <Toggle />
          </div>
          {inputIsVisible && <InputHeader placeholder={location.pathname}/>}
        </div>
        <Navbar />
      </header>
    </ToggleProvider>
  );
}

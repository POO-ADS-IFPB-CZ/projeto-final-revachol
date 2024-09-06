import { useRef, useState } from "react";
import { createContext } from "react";

export const ToggleContext = createContext({});


export function ToggleProvider(props) {
  const [visible, setVisible] = useState(false)

  function replaceClassList(class1, class2) {
    navbarRef.current.classList.remove(class1)
    navbarRef.current.classList.add(class2)
  }

  // vai manipular a navbar para deixar ela oculta ou não
  const navbarRef = useRef(null)

  function handleToggleNavbar() {
    const classList = navbarRef.current.classList
    if (classList.contains("flex")) {
      replaceClassList("flex", "hidden")
      setVisible(false)
    }
    else{
      replaceClassList("hidden","flex")
      setVisible(true)
    }
    
  }


  return (
    <ToggleContext.Provider value={{
      isVisible: visible,  // se a navbar está visivel ou não
      navbarRef,
      handleToggleNavbar
    }}>
      {props.children}
    </ToggleContext.Provider>
  );
}

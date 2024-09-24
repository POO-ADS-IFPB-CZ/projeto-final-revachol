import { createContext, useContext, useEffect, useState } from 'react';
import { logout } from '../utils/userSeller/logout';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); 

  const login = (userData) => {
    setUser(userData); 
    Cookies.set("user", JSON.stringify(userData) , { expires: 3 });
  };

  async function handleLogout() {
    const success = await logout();
    if (success) {
      setUser(null); 
      Cookies.remove("user");
    }
  }

  function loadUserAfterReload(){
    const userData = Cookies.get("user");
    if(userData) {
      setUser(JSON.parse(userData)); 
    }
  }

  useEffect(()=> {
    document.onload = loadUserAfterReload();
  },[]);

  


  return (
    <AuthContext.Provider value={{ user, login, handleLogout, loadUserAfterReload }}>
      {children}
    </AuthContext.Provider>
  );
}


export function useAuth() {
  return useContext(AuthContext);
}
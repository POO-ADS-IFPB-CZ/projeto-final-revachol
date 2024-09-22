import { createContext, useContext, useState } from 'react';
import { logout } from '../utils/userSeller/logout';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); 

  const login = (userData) => {
    setUser(userData); 
  };

  async function handleLogout() {
    const success = await logout();
    if (success) {
      setUser(null); 
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
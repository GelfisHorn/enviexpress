import { Children, createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

function AuthProvider({ children }:any) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = ({ username }:any) => {
    setUser(username);
    navigate('/admin/provider')
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  const auth = {user, login, logout};

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

export {
  AuthProvider,
  useAuth,
}
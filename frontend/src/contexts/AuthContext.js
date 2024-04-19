import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();


export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem("token");
    const user = token ? jwtDecode(token) : null;
    return { user, token };
  });

  const setAuthData = (token) => {
    localStorage.setItem("token", token);
    const user = token ? jwtDecode(token) : null;
    setAuth({ user, token });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setAuth({ user: null, token: null });
    navigate("/home");
  };

  return (
    <AuthContext.Provider value={{ ...auth, setAuthData, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

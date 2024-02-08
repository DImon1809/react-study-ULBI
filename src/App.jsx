import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { AuthContext } from "./components/UI/context";

import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) setIsAuth(true);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        {isAuth && <Navbar />}
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

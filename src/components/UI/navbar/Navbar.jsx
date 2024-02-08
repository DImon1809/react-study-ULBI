import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context";

import MyButton from "../button/MyButton";

export default function Navbar() {
  const { setIsAuth } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <MyButton
        onClick={() => {
          setIsAuth(false);

          localStorage.clear();
        }}
      >
        Выйти
      </MyButton>
      <div className="navbar-links">
        <Link to="/">О нас</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </nav>
  );
}

import { useContext } from "react";
import { AuthContext } from "../components/UI/context";

import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

export default function Login() {
  const { setIsAuth } = useContext(AuthContext);

  return (
    <div style={{ width: "400px", height: "400px", margin: "0 auto" }}>
      <h1>Страница для логина</h1>
      <form>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton
          onClick={(event) => {
            event.preventDefault();

            setIsAuth(true);

            localStorage.setItem("auth", "true");
          }}
        >
          Войти
        </MyButton>
      </form>
    </div>
  );
}

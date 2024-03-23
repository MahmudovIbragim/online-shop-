import { FC } from "react";
import scss from "./Login.module.scss";
import LoginForm from "./loginForm/LoginForm";

interface TypeLogin {}
const Login: FC<TypeLogin> = () => {
  return (
    <div className={scss.Login}>
      <div className="container">
        <div className={scss.Content}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;

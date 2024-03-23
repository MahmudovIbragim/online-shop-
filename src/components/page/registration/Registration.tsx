import { FC } from "react";
import scss from "./Style.module.scss";
import RegisterForm from "./registrationForm/RegisterForm";

interface TypeRegister {}
const Registration: FC<TypeRegister> = () => {
  return (
    <div className={scss.Register}>
      <div className="container">
        <div className={scss.Content}>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Registration;

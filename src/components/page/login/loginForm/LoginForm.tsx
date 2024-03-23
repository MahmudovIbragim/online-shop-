import { Link, useNavigate } from "react-router-dom";
import scss from "./LoginForm.module.scss";
import Button, { ButtonProps } from "../../../ui/customButton/CustomButton";
import Input from "../../../ui/customInput/CustomInput";
import { useLoginMutation } from "../../../../redux/api/auth";
import { useFormik } from "formik";
import { loginvalidation } from "../../../../utils/validations/loginValidations";
const LoginForm = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const loginButtonProps: ButtonProps = {
    type: "submit",
    variant: "primary",
    color: "white",
    width: "308px",
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginvalidation,
    onSubmit: async (values) => {
      const result = await login({
        email: values.email,
        password: values.password,
      });
      if ("data" in result) {
        const { token } = result.data;
        localStorage.setItem("token", token);
        localStorage.setItem("isAuth", "true");
        navigate("/");
      }
    },
  });

  return (
    <form className={scss.Form} onSubmit={formik.handleSubmit}>
      <h2>Вход</h2>
      <Input
        className={
          formik.touched.email && formik.errors.email
            ? `${scss.redInput}`
            : `${scss.input}`
        }
        id="email"
        type="email"
        label="Email"
        placeholder="Логин "
        value={formik.values.email}
        onChange={formik.handleChange}
        width="300px"
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
        <>
          <p className={scss.error_txt}>{formik.errors.email}</p>
        </>
      ) : null}
      <Input
        className={
          formik.touched.password && formik.errors.password
            ? `${scss.redInput}`
            : `${scss.input}`
        }
        id="password"
        type="password"
        label="Пароль"
        placeholder="Введите пароль "
        value={formik.values.password}
        onChange={formik.handleChange}
        width="300px"
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password ? (
        <>
          <p className={scss.passwod_txt}>
            {formik.errors.password}
          </p>
        </>
      ) : null}
      <div className={scss.btn}>
        <Button {...loginButtonProps}>Войти</Button>
      </div>
      <div className={scss.login_variant}>
        <p>ИЛИ</p>
      <Link to={"/register"}>Зарегестрироватся</Link>
      <Link to={"/register"}>Забыли Пароль</Link>
      </div>
    </form>
  );
};
export default LoginForm;

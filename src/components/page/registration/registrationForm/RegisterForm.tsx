/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import Button, { ButtonProps } from "../../../ui/customButton/CustomButton";
// import Input from "../../ui/customInput/CustomInput";
import { Field, Form, Formik } from "formik";
import { registerValidate } from "../../../../utils/validations/registrationValidate";
import scss from "./Register.module.scss";
import { useRegistrationMutation } from "../../../../redux/api/auth";

const RegisterForm = () => {
	const [createUser] = useRegistrationMutation();
	const navigate = useNavigate();
	const handleAddUserSubmit = async (values: any) => {
		const { userName, email, password } = values;
		const result = await createUser({ userName, email, password });
		if (result) {
			navigate("/login");
		}
	};

	const loginButtonProps: ButtonProps = {
		type: "submit",
		variant: "primary",
		color: "blue",
		width: "300px",
	};

	return (
		<div className={scss.Register}>
			<Formik
				initialValues={{
					userName: "",
					email: "",
					password: "",
				}}
				onSubmit={handleAddUserSubmit}
				validationSchema={registerValidate}>
				{({ errors, touched }) => (
					<div className={scss.Content}>
						<Form>
							<label htmlFor="email">
								Email
								<Field
									className={
										touched.email && errors.email
											? `${scss.redInput}`
											: `${scss.input}`
									}
									id="email"
									name="email"
									type="email"
									placeholder="Введите адрес почты "
								/>
								{touched.email && errors.email ? (
									<>
										<p>{errors.email}</p>
									</>
								) : null}
							</label>
							<label htmlFor="userName">
								Имя
								<Field
									className={
										touched.userName && errors.userName
											? `${scss.redInput}`
											: `${scss.input}`
									}
									id="userName"
									name="userName"
									type="userName"
									placeholder="Введите ваше имя"
								/>
								{touched.userName && errors.userName ? (
									<>
										<p>{errors.userName}</p>
									</>
								) : null}
							</label>
							<label htmlFor="password">
								Пароль
								<Field
									className={
										touched.password && errors.password
											? `${scss.redInput}`
											: `${scss.input}`
									}
									id="password"
									name="password"
									type="password"
									placeholder="Введите пароль "
								/>
								{touched.password && errors.password ? (
									<>
										<p>{errors.password}</p>
									</>
								) : null}
							</label>
							<Button {...loginButtonProps}>Зарегистрироваться</Button>
							<Link to={"/login"}>
								Уже зарегистрированы?{" "}
								<span style={{ color: "green" }}> Войти</span>
							</Link>
						</Form>
					</div>
				)}
			</Formik>
		</div>
	);
};

export default RegisterForm;

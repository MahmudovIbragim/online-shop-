import * as Yup from "yup";
export const registerValidate = Yup.object({
  email: Yup.string()
    .email("Не корректный адрес")
    .required("Введите адрес почты "),
  password: Yup.string()
    .min(4, "Пороль должен сдержать мин 4 символов")
    .required("Введите пароль "),
  userName: Yup.string()
    .min(4, "Имя должен сдержать мин 4 символов")
    .required("Введите ваше имя"),
});

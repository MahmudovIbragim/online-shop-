import * as Yup from "yup";

export const loginvalidation = Yup.object({
  email: Yup.string()
    .email("Не корректный адрес")
    .required("Введите адрес почты "),
  password: Yup.string()
    .min(4, "Пороль должен сдержать мин 4 символов")
    .required("Введите пароль "),
});

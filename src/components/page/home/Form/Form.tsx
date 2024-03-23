import { useFormik } from "formik";
import Button, { ButtonProps } from "../../../ui/customButton/CustomButton";
import scss from "./Style.module.scss";
import Input from "../../../ui/customInput/CustomInput";
import plus_icon from "../../../../assets/ic_baseline-plus.svg";

import { FC } from "react";
import { usePostProductMutation } from "../../../../redux/api/product";

interface HomeFormProps {
  onClose: () => void;
}

const HomeForm: FC<HomeFormProps> = ({ onClose }) => {
  const [createProduct] = usePostProductMutation();
  const loginButtonProps: ButtonProps = {
    type: "submit",
    variant: "primary",
    color: "blue",
    width: "315px",
  };
  const formik = useFormik({
    initialValues: {
      productName: "",
      price: "",
      quantity: "",
      photoUrl: "",
    },
    onSubmit: async (values) => {
      const newData = {
        productName: values.productName,
        price: values.price,
        quantity: values.quantity,
        photoUrl: values.photoUrl,
      };
      await createProduct(newData);
      onClose();
    },
  });
  return (
    <form className={scss.Form} onSubmit={formik.handleSubmit}>
      <Input
        id="productName"
        type="text"
        label="Название товара"
        placeholder="Название"
        value={formik.values.productName}
        onChange={formik.handleChange}
        width="300px"
      />
      <Input
        id="price"
        type="text"
        label="Цена"
        placeholder="Цена"
        value={formik.values.price}
        onChange={formik.handleChange}
        width="300px"
      />
      <Input
        id="quantity"
        type="text"
        label="Количество в запасе"
        placeholder="Количество"
        value={formik.values.quantity}
        onChange={formik.handleChange}
        width="300px"
      />
      <Input
        id="photoUrl"
        type="text"
        label="Изображение "
        placeholder="Изображение"
        value={formik.values.photoUrl}
        onChange={formik.handleChange}
        width="300px"
      />
      <p>
        <img src={plus_icon} /> Добавить следующий <br />
        цвет
      </p>
      <div className={scss.btn}>
        <button onClick={onClose}>Отменить</button>
        <Button {...loginButtonProps}>Добавить</Button>
      </div>
    </form>
  );
};

export default HomeForm;

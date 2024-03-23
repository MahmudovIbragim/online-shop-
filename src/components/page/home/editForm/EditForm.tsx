import { useFormik } from "formik";
import Input from "../../../ui/customInput/CustomInput";
import scss from "./EditStyle.module.scss";

import { FC } from "react";
import { useEditProductMutation } from "../../../../redux/api/product";

interface HomeFormProps {
	onClose: () => void;
	itemName: string;
	itemPrice: string;
	itemQueantity: string;
	itemUrl: string;
	itemId: string;
}

const EditForm: FC<HomeFormProps> = ({
	onClose,
	itemName,
	itemPrice,
	itemQueantity,
	itemUrl,
	itemId,
}) => {
	const [editProduct] = useEditProductMutation();

	const formik = useFormik({
		initialValues: {
			productName: itemName,
			price: itemPrice,
			quantity: itemQueantity,
			photoUrl: itemUrl,
		},
		onSubmit: async (values) => {
			const updateData = {
				productName: values.productName,
				price: values.price,
				quantity: values.quantity,
				photoUrl: values.photoUrl,
			};

			await editProduct({ itemId, updateData });
			onClose();
		},
	});
	return (
		<form className={scss.form} onSubmit={formik.handleSubmit}>
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
			<div className={scss.btn}>
				<button onClick={onClose}>Отменить</button>
				<button>Добавить</button>
			</div>
		</form>
	);
};

export default EditForm;

/* eslint-disable @typescript-eslint/no-unused-vars */
namespace PRODUCT {
	type GetProductsResponse = {
		_id: string;
		productName: string;
		quantity: string;
		price: string;
		photoUrl: string;
		isFavorite: boolean;
		isInBasket: boolean;
		__v: number;
	}[]
	type GetProductsRequest = void;

	type GetProductResponse = {
		_id: string;
		productName: string;
		quantity: string;
		price: string;
		photoUrl: string;
		isFavorite: boolean;
		isInBasket: boolean;
		__v: number;
	}
	type GetProductRequest = string;

	type PostProductResponse = {
		productName: string;
		quantity: string;
		price: string;
		photoUrl: string;
		isFavorite: boolean;
		isInBasket: boolean;
		_id: string;
		__v: number;
	};
	type PostProductRequest = {
		productName: string;
		price: string;
		quantity: string;
		photoUrl: string;
	};

	type EditProductResponse = {
		_id: string;
		productName: string;
		quantity: string;
		price: string;
		photoUrl: string;
		isFavorite: boolean;
		isInBasket: boolean;
		__v: number;
	};
	type EditProductRequest = {
		itemId: string;
		updateData: {
			productName: string;
			price: string;
			quantity: string;
			photoUrl: string;
		};
	};
}

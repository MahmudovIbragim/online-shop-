/* eslint-disable @typescript-eslint/no-unused-vars */
namespace BASKET {
	type GetProductsResponse = {
		_id: string;
		product?: {
			_id: string;
			productName: string;
			quantity: string;
			price: string
			photoUrl: string;
			isFavorite: boolean;
			isInBasket: boolean;
		};
		__v: number;
	}[]
	type GetProductsRequest = void;

	type AddProductResponse = {
		message: string;
		isInBasket: boolean;
	};
	type AddProductRequest = string;

	type ProductBuyBasketResponse = {
		message: string;
		обновленныйПродукт: {
			_id: string;
			productName: string;
			quantity: string;
			price: string;
			photoUrl: string;
			isFavorite: boolean;
			isInBasket: boolean;
			__v: number;
		};
	};
	type ProductBuyBasketRequest = {
    _id: string | undefined
    newData: {
      quantityToDecrease: string | number;
    };
  };
}

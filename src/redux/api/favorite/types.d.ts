/* eslint-disable @typescript-eslint/no-unused-vars */
namespace FAVORITE {
  type GetProductsResponse = {
    _id: string;
    product?: {
      _id: string;
      productName: string;
      quantity: string;
      price: string;
      photoUrl: string;
      isFavorite: boolean;
      isInBasket: boolean;
    };
    __v: number;
  }[];
  type GetProductsRequest = void;

  type AddProductResponse = {
    message: string;
    isFavorite: boolean;
  };
  type AddProductRequest = string;
}

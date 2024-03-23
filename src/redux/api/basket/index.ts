import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getBaskets: builder.query<
      BASKET.GetProductsResponse,
      BASKET.GetProductsRequest
    >({
      query: () => ({
        url: "basket",
        method: "GET",
      }),
      providesTags: ["product"],
    }),

    addBasket: builder.mutation<
      BASKET.AddProductResponse,
      BASKET.AddProductRequest
    >({
      query: (id) => ({
        url: `basket/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["product"],
    }),

    productBuyBasket: builder.mutation<
      BASKET.ProductBuyBasketResponse,
      BASKET.ProductBuyBasketRequest
    >({
      query: ({ _id, newData }) => ({
        url: `product-buy/${_id}`,
        method: "PATCH",
        body: newData,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetBasketsQuery,
  useAddBasketMutation,
  useProductBuyBasketMutation,
} = api;

import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<
      PRODUCT.GetProductsResponse,
      PRODUCT.GetProductsRequest
    >({
      query: () => ({
        url: "products",
        method: "GET",
      }),
      providesTags: ["product"],
    }),

    getProduct: builder.query<
      PRODUCT.GetProductResponse,
      PRODUCT.GetProductRequest
    >({
      query: (_id) => ({
        url: `products/${_id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),

    postProduct: builder.mutation<
      PRODUCT.PostProductResponse,
      PRODUCT.PostProductRequest
    >({
      query: (newData) => ({
        url: "products",
        method: "POST",
        body: newData,
      }),
      invalidatesTags: ["product"],
    }),

    editProduct: builder.mutation<
      PRODUCT.EditProductResponse,
      PRODUCT.EditProductRequest
    >({
      query: ({ itemId, updateData }) => ({
        url: `products/${itemId}`,
        method: "PUT",
        body: updateData,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  usePostProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
} = api;

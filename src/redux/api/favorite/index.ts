import { api as index } from "..";

const api = index.injectEndpoints({
	endpoints: (builder) => ({
		getFavorites: builder.query<
			FAVORITE.GetProductsResponse,
			FAVORITE.GetProductsRequest
		>({
			query: () => ({
				url: "favorites-products",
				method: "GET",
			}),
			providesTags: ["favorite"],
		}),

		addFavorite: builder.mutation<
			FAVORITE.AddProductResponse,
			FAVORITE.AddProductRequest
		>({
			query: (id) => ({
				url: `favorites-products/${id}`,
				method: "POST",
			}),
			invalidatesTags: ["favorite"],
		}),
	}),
});

export const { useGetFavoritesQuery, useAddFavoriteMutation } = api;

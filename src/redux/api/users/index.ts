import { api as index } from "..";

const api = index.injectEndpoints({
	endpoints: (builder) => ({
		getUsers: builder.query<USERS.GetUsersResponse, USERS.GetUsersRequest>({
			query: () => "users",
			providesTags: ["users"],
		}),
	}),
});

export const { useGetUsersQuery } = api;

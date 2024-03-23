import { api as index } from "..";

const api = index.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<AUTH.PostLoginResponse, AUTH.PostLoginRequest>({
			query: (body) => ({
				url: "login",
				method: "POST",
				body: body,
			}),
			invalidatesTags: ["auth"],
		}),

		registration: builder.mutation<
			AUTH.PostRegistrationResponse,
			AUTH.PostRegistrationRequest
		>({
			query: (body) => ({
				url: "users",
				method: "POST",
				body: body,
			}),
			invalidatesTags: ["auth"],
		}),
	}),
});

export const { useLoginMutation } = api;

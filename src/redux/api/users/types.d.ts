/* eslint-disable @typescript-eslint/no-unused-vars */
namespace USERS {
	type GetUsersResponse = {
		_id: number;
		__v: number;
		email: string;
		password: string;
		userName: string;
	};
	type GetUsersRequest = void;
}

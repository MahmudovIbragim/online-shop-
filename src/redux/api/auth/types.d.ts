/* eslint-disable @typescript-eslint/no-unused-vars */
namespace AUTH {
  type PostLoginResponse = {
    token: string;
    authority: string;
  };
  type PostLoginRequest = {
    email: string;
    password: string;
  };

  type PostRegistrationResponse = {
    userName: string;
    email: string;
    password: string;
  };
  type PostRegistrationRequest = {
    userName: string;
    email: string;
    password: string;
  };
}

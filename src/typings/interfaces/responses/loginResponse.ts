import { IBaseResponse } from "./baseResponse";

export interface ILoginResponseBody {
  token: string;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  avatar: any;
  emailVerifyCode: any;
  isEmailVerified?: string;
  role: {
    id: number;
    name: string;
    description: string;
    permissions: [
      {
        id: number;
        name: string;
        description: string;
      },
      {
        id: 3;
        name: string;
        description: string;
      }
    ];
  };
}

export type ILoginResponse = IBaseResponse<ILoginResponseBody>;

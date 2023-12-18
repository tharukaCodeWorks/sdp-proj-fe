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
}

export type ILoginResponse = IBaseResponse<ILoginResponseBody>;

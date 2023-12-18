import { IBaseResponse } from "./baseResponse";

export interface IEmailVerifyResponseBody {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
}

export type IEmailVerifyResponse = IBaseResponse<IEmailVerifyResponseBody>;

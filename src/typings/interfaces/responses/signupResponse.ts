import { IBaseResponse } from "./baseResponse";

export interface ISignupResponseBody {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
}

export type ISignupResponse = IBaseResponse<ISignupResponseBody>;

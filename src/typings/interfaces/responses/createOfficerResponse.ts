import { IBaseResponse } from "./baseResponse";

export interface ICreateOfficerResponseData {
  firstName: string;
  lastName: string;
  userLevel: string;
}

export type ICreateOfficerResponse = IBaseResponse<ICreateOfficerResponseData>;

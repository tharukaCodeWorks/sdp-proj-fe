import { IBaseResponse } from "./baseResponse";

export interface ICreateComplaintResponseData {
  complaintTitle: string;
  complaintDesc: string;
  reportedDate: string;
  status: number;
  priority: number;
}

export type ICreateComplaintResponse = IBaseResponse<Array<ICreateComplaintResponseData>>;

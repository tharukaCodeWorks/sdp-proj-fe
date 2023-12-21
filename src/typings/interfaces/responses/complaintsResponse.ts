import { ComplaintStatus } from "../../enum";
import { IBaseResponse } from "./baseResponse";

export interface IPublicUserResponseData {
  priority: string;
  complaintId: number;
  complaintDesc: string;
  complaintTitle: string;
  divisionId: number;
  status: ComplaintStatus;
  divisionName: string;
  departmentId: number;
  departmentName: string;
  assignedUserName: string;
  assignedUserId: number;
}

export type IPublicUserResponse = IBaseResponse<Array<IPublicUserResponseData>>;

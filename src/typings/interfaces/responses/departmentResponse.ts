import { IBaseResponse } from "./baseResponse";

export interface IDepartmentDataItem {
  name: string;
  id: number;
}

export type IDepartmentResponse = IBaseResponse<Array<IDepartmentDataItem>>;

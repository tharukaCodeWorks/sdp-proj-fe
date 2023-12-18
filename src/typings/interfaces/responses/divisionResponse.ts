import { IBaseResponse } from "./baseResponse";

export interface IDivisionResponseBody {
  id: number;
  province: string;
  divisionName: string;
  departmentId: number;
  departmentName: string;
}

export type IDivisionResponse = IBaseResponse<Array<IDivisionResponseBody>>;

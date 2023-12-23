import { IBaseResponse } from "./baseResponse";

interface ISystemUsersResponseData {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    usertype: string;
    division_name: string;
    division_id: number;
    department_name: string;
    department_id: number;
}

export type ISystemUsersResponse = IBaseResponse<Array<ISystemUsersResponseData>>
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CREATE_COMPLAINT_API,
  DELETE_COMPLAINT_API,
  GET_ALL_DEPARTMENTS_API,
  GET_ALL_DIVISIONS_API,
  GET_PUBLIC_USER_COMPLAINTS_API,
  GET_SYSTEM_USER_COMPLAINTS_API,
  UODATE_COMPLAINT_API,
} from "../../configs/ApiConfig";
import { IBaseResponse, IDivisionResponse } from "../../typings/interfaces/responses";
import { IDepartmentResponse } from "../../typings/interfaces/responses/departmentResponse";
import { ICreateComplaintRequest } from "../../typings/interfaces/requests";
import { ICreateComplaintResponse } from "../../typings/interfaces/responses/createComplaintResponse";
import { IPublicUserResponse } from "../../typings/interfaces/responses/complaintsResponse";
import { IUpdateComplaintBySysRequest } from "../../typings/interfaces/requests/updateComplaintBySysRequest";

export const getAllDivisions = createAsyncThunk(
  "complaint/getAllDivisions",
  async (_, thunkAPI) => {
    const response = await axios.get(GET_ALL_DIVISIONS_API);
    const data: IDivisionResponse = response.data;

    return data;
  }
);

export const getAllDepartments = createAsyncThunk(
  "complaint/getAllDepartments",
  async (_, thunkAPI) => {
    const response = await axios.get(GET_ALL_DEPARTMENTS_API);
    const data: IDepartmentResponse = response.data;

    return data;
  }
);

export const createComplaint = createAsyncThunk(
  "complaint/createComplaint",
  async (complainData: ICreateComplaintRequest, thunkAPI) => {
    const response = await axios.post(CREATE_COMPLAINT_API, complainData);
    const data: ICreateComplaintResponse = response.data;

    return data;
  }
);

export const getAllPublicUserComplaints = createAsyncThunk(
  "complaint/getAllPublicUserComplaints",
  async (_, thunkAPI) => {
    const response = await axios.get(GET_PUBLIC_USER_COMPLAINTS_API);
    const data: IPublicUserResponse = response.data;

    return data;
  }
);

export const deletePublicUserComplaint = createAsyncThunk(
  "complaint/deletePublicUserComplaint",
  async ({ id }: { id: number }, thunkAPI) => {
    const response = await axios.delete(DELETE_COMPLAINT_API(id));
    const data = response.data;

    return data;
  }
);

export const getAllSystemUserComplaints = createAsyncThunk(
  "complaint/getAllSystemUserComplaints",
  async ({status}:{status:number}, thunkAPI) => {
    const response = await axios.get(GET_SYSTEM_USER_COMPLAINTS_API(status));
    const data: IPublicUserResponse = response.data;

    return data;
  }
);

export const updateComplaintBySys = createAsyncThunk(
  "complaint/updateComplaintBySys",
  async (complainData: IUpdateComplaintBySysRequest, thunkAPI) => {
    const response = await axios.put(UODATE_COMPLAINT_API, complainData);
    const data: IBaseResponse<boolean> = response.data;

    return data;
  }
);

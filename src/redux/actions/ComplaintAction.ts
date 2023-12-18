import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  CREATE_COMPLAINT_API,
  GET_ALL_DEPARTMENTS,
  GET_ALL_DIVISIONS,
} from "../../configs/ApiConfig";
import { IDivisionResponse } from "../../typings/interfaces/responses";
import { IDepartmentResponse } from "../../typings/interfaces/responses/departmentResponse";
import { ICreateComplaintRequest } from "../../typings/interfaces/requests";
import { ICreateComplaintResponse } from "../../typings/interfaces/responses/createComplaintResponse";

export const getAllDivisions = createAsyncThunk(
  "complaint/getAllDivisions",
  async (_, thunkAPI) => {
    const response = await axios.get(GET_ALL_DIVISIONS);
    const data: IDivisionResponse = response.data;

    return data;
  }
);

export const getAllDepartments = createAsyncThunk(
  "complaint/getAllDepartments",
  async (_, thunkAPI) => {
    const response = await axios.get(GET_ALL_DEPARTMENTS);
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

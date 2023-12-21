import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUpdateComplaintBySysRequest } from "../../typings/interfaces/requests/updateComplaintBySysRequest";
import { IBaseResponse, ICreateOfficerResponse } from "../../typings";
import { ICreateOfficerRequest } from "../../typings/interfaces/requests/createOfficerRequest";
import axios from "axios";
import { CREATE_OFFICER_ENDPOINT, GET_SYSTEM_USERS_ENDPOINT } from "../../configs/ApiConfig";
import { ISystemUsersResponse } from "../../typings/interfaces/responses/systemUsersResponse";

export const createOfficer = createAsyncThunk(
  "users/createSystemUser",
  async (officerData: ICreateOfficerRequest, thunkAPI) => {
    const response = await axios.post(CREATE_OFFICER_ENDPOINT, officerData);
    const data: ICreateOfficerResponse = response.data;

    return data;
  }
);

export const getSystemUsers = createAsyncThunk(
  "users/getSystemUsers",
  async (_, thunkAPI) => {
    const response = await axios.get(GET_SYSTEM_USERS_ENDPOINT);
    const data: ISystemUsersResponse = response.data;

    return data;
  }
);

export const searchSystemUsers = createAsyncThunk(
  "users/searchSystemUsers",
  async ({name}:{name:string}, thunkAPI) => {
    const response = await axios.get(`${GET_SYSTEM_USERS_ENDPOINT}?name=${encodeURIComponent(name)}`);
    const data: ISystemUsersResponse = response.data;

    return data;
  }
);

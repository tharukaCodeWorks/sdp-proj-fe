import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { LOGIN_API, REGISTER_API, VERIFY_EMAIL_API } from "../../configs/ApiConfig";
import {
  IEmailVerifyResponse,
  ILoginResponse,
  ISignupResponse,
} from "../../typings/interfaces/responses";
import {
  IEmailVerifyRequest,
  ILoginRequest,
  ISignupRequest,
} from "../../typings/interfaces/requests";

export const authenticateUser = createAsyncThunk(
  "auth/authenticateUser",
  async (userData: ILoginRequest, thunkAPI) => {
    const response = await axios.post(LOGIN_API, userData);
    const data: ILoginResponse = response.data;

    if (data.status === "success") {
      localStorage.setItem("token", data.body.token);
      localStorage.setItem("user", JSON.stringify(data.body));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.body.token}`;
    }

    return data;
  }
);

export const verifyEmail = createAsyncThunk(
  "auth/verifyEmail",
  async (emailVerifyData: IEmailVerifyRequest, thunkAPI) => {
    const response = await axios.post(VERIFY_EMAIL_API, emailVerifyData);
    const data: IEmailVerifyResponse = response.data;

    return data;
  }
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (signupData: ISignupRequest, thunkAPI) => {
    const response = await axios.post(REGISTER_API, signupData);
    const data: ISignupResponse = response.data;

    return data;
  }
);
 
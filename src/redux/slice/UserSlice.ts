import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { verifyEmail } from "../actions/AuthAction";
import {
  ICreateOfficerResponse,
  IEmailVerifyResponse,
} from "../../typings/interfaces/responses";
import { createOfficer, getSystemUsers, searchSystemUsers } from "../actions/UsersAction";
import { ISystemUsersResponse } from "../../typings/interfaces/responses/systemUsersResponse";

interface UsersState {
  createOfficer: ICreateOfficerResponse | null;
  createOfficerLoading: boolean;
  createOfficerError: string | null;

  systemUsers: ISystemUsersResponse | null;
  systemUsersLoading: boolean;
  systemUsersError: string | null;

  searchSystemUsers: ISystemUsersResponse | null;
  searchSystemUsersLoading: boolean;
  searchSystemUsersError: string | null;
}

const initialState: UsersState = {
  createOfficer: null,
  createOfficerLoading: false,
  createOfficerError: null,

  systemUsers: null,
  systemUsersLoading: false,
  systemUsersError: null,

  searchSystemUsers: null,
  searchSystemUsersLoading: false,
  searchSystemUsersError: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createOfficer.pending, (state) => {
      state.createOfficer = null;
      state.createOfficerLoading = true;
      state.createOfficerError = null;
    });
    builder.addCase(
      createOfficer.fulfilled,
      (state, action: PayloadAction<ICreateOfficerResponse>) => {
        state.createOfficer = action.payload;
        state.createOfficerError = null;
        state.createOfficerLoading = false;
      }
    );
    builder.addCase(createOfficer.rejected, (state) => {
      state.createOfficer = null;
      state.createOfficerLoading = false;
      state.createOfficerError = "Something went wrong. Please try again";
    });

    builder.addCase(getSystemUsers.pending, (state) => {
        state.systemUsers = null;
        state.systemUsersLoading = true;
        state.systemUsersError = null;
      });
      builder.addCase(
        getSystemUsers.fulfilled,
        (state, action: PayloadAction<ISystemUsersResponse>) => {
          state.systemUsers = action.payload;
          state.systemUsersError = null;
          state.systemUsersLoading = false;
        }
      );
      builder.addCase(getSystemUsers.rejected, (state) => {
        state.systemUsers = null;
        state.systemUsersLoading = false;
        state.systemUsersError = "Something went wrong. Please try again";
      });

      builder.addCase(searchSystemUsers.pending, (state) => {
        state.searchSystemUsers = null;
        state.searchSystemUsersLoading = true;
        state.searchSystemUsersError = null;
      });
      builder.addCase(
        searchSystemUsers.fulfilled,
        (state, action: PayloadAction<ISystemUsersResponse>) => {
          state.searchSystemUsers = action.payload;
          state.searchSystemUsersError = null;
          state.searchSystemUsersLoading = false;
        }
      );
      builder.addCase(searchSystemUsers.rejected, (state) => {
        state.searchSystemUsers = null;
        state.searchSystemUsersLoading = false;
        state.searchSystemUsersError = "Something went wrong. Please try again";
      });
  },
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;

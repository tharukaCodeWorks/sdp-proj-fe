import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IDivisionResponse } from "../../typings/interfaces/responses";
import { createComplaint, getAllDepartments, getAllDivisions } from "../actions/ComplaintAction";
import { IDepartmentResponse } from "../../typings/interfaces/responses/departmentResponse";
import { ICreateComplaintResponse, ICreateComplaintResponseData } from "../../typings/interfaces/responses/createComplaintResponse";

interface ComplaintState {
  divisions: IDivisionResponse | null;
  divisionLoading: boolean;
  divisionError: string | null;

  departments: IDepartmentResponse | null;
  departmentsLoading: boolean;
  departmentError: string | null;

  createComplaint: ICreateComplaintResponse | null;
  createComplaintLoading: boolean;
  createComplaintError: string | null;
}

const initialState: ComplaintState = {
  divisions: null,
  divisionLoading: false,
  divisionError: null,

  departments: null,
  departmentsLoading: false,
  departmentError: null,

  createComplaint: null,
  createComplaintLoading: false,
  createComplaintError: null
};

const complaintSlice = createSlice({
  name: "complaint",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllDivisions.pending, (state) => {
      state.divisionLoading = true;
      state.divisionError = null;
      state.divisions = null;
    });
    builder.addCase(
      getAllDivisions.fulfilled,
      (state, action: PayloadAction<IDivisionResponse>) => {
        state.divisionLoading = false;
        state.divisionError = null;
        state.divisions = action.payload;
      }
    );
    builder.addCase(getAllDivisions.rejected, (state) => {
      state.divisionLoading = false;
      state.divisionError = "Failed to load";
      state.divisions = null;
    });

    builder.addCase(getAllDepartments.pending, (state) => {
      state.departmentsLoading = true;
      state.departmentError = null;
      state.departments = null;
    });
    builder.addCase(
      getAllDepartments.fulfilled,
      (state, action: PayloadAction<IDepartmentResponse>) => {
        state.departmentsLoading = false;
        state.departmentError = null;
        state.departments = action.payload;
      }
    );
    builder.addCase(getAllDepartments.rejected, (state) => {
      state.departmentsLoading = false;
      state.departmentError = "Failed to load";
      state.departments = null;
    });

    builder.addCase(createComplaint.pending, (state) => {
        state.createComplaintLoading = true;
        state.createComplaintError = null;
        state.createComplaint = null;
      });
      builder.addCase(
        createComplaint.fulfilled,
        (state, action: PayloadAction<ICreateComplaintResponse>) => {
          state.createComplaintLoading = false;
          state.createComplaintError = null;
          state.createComplaint = action.payload;
        }
      );
      builder.addCase(createComplaint.rejected, (state) => {
        state.createComplaintLoading = false;
        state.createComplaintError = "Failed to load";
        state.createComplaint = null;
      });
  },
});

export const {} = complaintSlice.actions;
export default complaintSlice.reducer;

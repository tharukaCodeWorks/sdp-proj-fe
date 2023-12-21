import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import {
  IBaseResponse,
  IDivisionResponse,
} from "../../typings/interfaces/responses";
import {
  createComplaint,
  deletePublicUserComplaint,
  getAllDepartments,
  getAllDivisions,
  getAllPublicUserComplaints,
  getAllSystemUserComplaints,
  updateComplaintBySys,
} from "../actions/ComplaintAction";
import { IDepartmentResponse } from "../../typings/interfaces/responses/departmentResponse";
import {
  ICreateComplaintResponse,
  ICreateComplaintResponseData,
} from "../../typings/interfaces/responses/createComplaintResponse";
import { IPublicUserResponse } from "../../typings/interfaces/responses/complaintsResponse";

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

  publicUserComplaints: IPublicUserResponse | null;
  publicUserComplaintsLoading: boolean;
  publicUserComplaintsError: string | null;

  deletePubliUserComplaint: null;
  deletePubliUserComplaintLoading: boolean;
  deletePubliUserComplaintError: string | null;

  systemUserComplaints: IPublicUserResponse | null;
  systemUserComplaintsLoading: boolean;
  systemUserComplaintsError: string | null;

  updateComplaintBySys: IBaseResponse<boolean> | null;
  updateComplaintBySysLoading: boolean;
  updateComplaintBySysError: string | null;
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
  createComplaintError: null,

  publicUserComplaints: null,
  publicUserComplaintsLoading: false,
  publicUserComplaintsError: null,

  deletePubliUserComplaint: null,
  deletePubliUserComplaintLoading: false,
  deletePubliUserComplaintError: null,

  systemUserComplaints: null,
  systemUserComplaintsLoading: false,
  systemUserComplaintsError: null,

  updateComplaintBySys: null,
  updateComplaintBySysLoading: false,
  updateComplaintBySysError: null,
};

const complaintSlice = createSlice({
  name: "complaint",
  initialState,
  reducers: {
    clearSystemUserComplaints: (state) => {
      state.systemUserComplaints = null;
    },
  },
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

    builder.addCase(getAllPublicUserComplaints.pending, (state) => {
      state.publicUserComplaintsLoading = true;
      state.publicUserComplaintsError = null;
      state.publicUserComplaints = null;
    });
    builder.addCase(
      getAllPublicUserComplaints.fulfilled,
      (state, action: PayloadAction<IPublicUserResponse>) => {
        state.publicUserComplaintsLoading = false;
        state.publicUserComplaintsError = null;
        state.publicUserComplaints = action.payload;
      }
    );
    builder.addCase(getAllPublicUserComplaints.rejected, (state) => {
      state.publicUserComplaintsLoading = false;
      state.publicUserComplaintsError = "Failed to load";
      state.publicUserComplaints = null;
    });

    builder.addCase(deletePublicUserComplaint.pending, (state) => {
      state.deletePubliUserComplaintLoading = true;
      state.deletePubliUserComplaintError = null;
      state.deletePubliUserComplaint = null;
    });
    builder.addCase(
      deletePublicUserComplaint.fulfilled,
      (state, action: PayloadAction<IPublicUserResponse>) => {
        state.deletePubliUserComplaintLoading = false;
        state.deletePubliUserComplaintError = null;
        state.deletePubliUserComplaint = null;
      }
    );
    builder.addCase(deletePublicUserComplaint.rejected, (state) => {
      state.deletePubliUserComplaintLoading = false;
      state.deletePubliUserComplaintError = "Failed to load";
      state.deletePubliUserComplaint = null;
    });

    builder.addCase(getAllSystemUserComplaints.pending, (state) => {
      state.systemUserComplaintsLoading = true;
      state.systemUserComplaintsError = null;
      state.systemUserComplaints = null;
    });
    builder.addCase(
      getAllSystemUserComplaints.fulfilled,
      (state, action: PayloadAction<IPublicUserResponse>) => {
        state.systemUserComplaintsLoading = false;
        state.systemUserComplaintsError = null;
        state.systemUserComplaints = action.payload;
      }
    );
    builder.addCase(getAllSystemUserComplaints.rejected, (state) => {
      state.systemUserComplaintsLoading = false;
      state.systemUserComplaintsError = "Failed to load";
      state.systemUserComplaints = null;
    });

    builder.addCase(updateComplaintBySys.pending, (state) => {
      state.updateComplaintBySysLoading = true;
      state.updateComplaintBySysError = null;
      state.updateComplaintBySys = null;
    });
    builder.addCase(
      updateComplaintBySys.fulfilled,
      (state, action: PayloadAction<IBaseResponse<boolean>>) => {
        state.updateComplaintBySysLoading = false;
        state.updateComplaintBySysError = null;
        state.updateComplaintBySys = action.payload;
      }
    );
    builder.addCase(updateComplaintBySys.rejected, (state) => {
      state.updateComplaintBySysLoading = false;
      state.updateComplaintBySysError = "Failed to load";
      state.updateComplaintBySys = null;
    });
  },
});

export const { clearSystemUserComplaints } = complaintSlice.actions;
export default complaintSlice.reducer;

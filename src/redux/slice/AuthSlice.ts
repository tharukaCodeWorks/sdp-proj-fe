import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  authenticateUser,
  forgotPassword,
  resetPassword,
  signupUser,
  verifyEmail,
} from "../actions/AuthAction";
import {
  IBaseResponse,
  IEmailVerifyResponse,
  ILoginResponse,
  ISignupResponse,
} from "../../typings/interfaces/responses";

interface AuthState {
  user: ILoginResponse | null;
  loginLoading: boolean;
  loginError: string | null;
  token: string | null;
  verifyEmail: string | null;

  emailVerify: IEmailVerifyResponse | null;
  emailVerifyLoading: boolean;
  emailVerifyError: string | null;

  signupUser: ISignupResponse | null;
  signupUserLoading: boolean;
  signupUserError: string | null;

  forgotPassword: IBaseResponse<{ email: string }> | null;
  forgotPasswordLoading: boolean;
  forgotPasswordError: string | null;

  passwordReset: IBaseResponse<{ email: string }> | null;
  passwordResetLoading: boolean;
  passwordResetError: string | null;
}

const initialState: AuthState = {
  user: null,
  loginError: null,
  loginLoading: false,
  token: null,
  verifyEmail: null,

  emailVerify: null,
  emailVerifyLoading: false,
  emailVerifyError: null,

  signupUser: null,
  signupUserLoading: false,
  signupUserError: null,

  forgotPassword: null,
  forgotPasswordLoading: false,
  forgotPasswordError: null,

  passwordReset: null,
  passwordResetLoading: false,
  passwordResetError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.user = null;
      state.token = null;
    },
    setVerifyEmail: (state, action) => {
      state.verifyEmail = action.payload.email;
    },
    setUserToken: (
      state,
      action: PayloadAction<{ user: ILoginResponse; token: string }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authenticateUser.pending, (state) => {
      state.user = null;
      state.token = null;
      state.loginError = null;
      state.loginLoading = true;
    });
    builder.addCase(
      authenticateUser.fulfilled,
      (state, action: PayloadAction<ILoginResponse>) => {
        state.user = action.payload;
        if (action.payload.status === "success") {
          state.token = action.payload.body.token;
          state.loginError = null;
        } else {
          state.loginError = action.payload.message;
        }

        state.loginLoading = false;
      }
    );
    builder.addCase(authenticateUser.rejected, (state) => {
      state.user = null;
      state.token = null;
      state.loginError = "Something went wrong. Please try again";
      state.loginLoading = false;
    });

    builder.addCase(verifyEmail.pending, (state) => {
      state.emailVerify = null;
      state.emailVerifyLoading = true;
      state.emailVerifyError = null;
    });
    builder.addCase(
      verifyEmail.fulfilled,
      (state, action: PayloadAction<IEmailVerifyResponse>) => {
        state.emailVerify = action.payload;

        if (action.payload.status === "success") {
          state.emailVerifyError = null;
        } else {
          state.emailVerifyError = action.payload.message;
        }
        state.emailVerifyLoading = false;
      }
    );
    builder.addCase(verifyEmail.rejected, (state) => {
      state.emailVerify = null;
      state.emailVerifyLoading = false;
      state.emailVerifyError = "Something went wrong. Please try again";
    });

    builder.addCase(signupUser.pending, (state) => {
      state.signupUser = null;
      state.signupUserLoading = true;
      state.signupUserError = null;
    });
    builder.addCase(
      signupUser.fulfilled,
      (state, action: PayloadAction<ISignupResponse>) => {
        state.signupUser = action.payload;

        if (action.payload.status === "success") {
          state.signupUserError = null;
        } else {
          state.signupUserError = action.payload.message;
        }
        state.signupUserLoading = false;
      }
    );
    builder.addCase(signupUser.rejected, (state) => {
      state.signupUser = null;
      state.signupUserLoading = false;
      state.signupUserError = "Something went wrong. Please try again";
    });

    builder.addCase(forgotPassword.pending, (state) => {
      state.forgotPassword = null;
      state.forgotPasswordLoading = true;
      state.forgotPasswordError = null;
    });
    builder.addCase(
      forgotPassword.fulfilled,
      (state, action: PayloadAction<IBaseResponse<{ email: string }>>) => {
        state.forgotPassword = action.payload;
        state.forgotPasswordLoading = false;
        state.forgotPasswordError = null;
      }
    );
    builder.addCase(forgotPassword.rejected, (state) => {
      state.forgotPassword = null;
      state.forgotPasswordLoading = false;
      state.forgotPasswordError = "Something went wrong. Please try again";
    });

    builder.addCase(resetPassword.pending, (state) => {
      state.passwordReset = null;
      state.passwordResetLoading = true;
      state.passwordResetError = null;
    });
    builder.addCase(
      resetPassword.fulfilled,
      (state, action: PayloadAction<IBaseResponse<{ email: string }>>) => {
        state.passwordReset = action.payload;
        state.passwordResetLoading = false;
        state.passwordResetError = null;
      }
    );
    builder.addCase(resetPassword.rejected, (state) => {
      state.passwordReset = null;
      state.passwordResetLoading = false;
      state.passwordResetError = "Something went wrong. Please try again";
    });
  },
});

export const { logout, setUserToken, setVerifyEmail } = authSlice.actions;
export const selectCurrentUser = (state: { auth: AuthState }) =>
  state.auth.user;
export const selectCurrentToken = (state: { auth: AuthState }) =>
  state.auth.token;

export default authSlice.reducer;

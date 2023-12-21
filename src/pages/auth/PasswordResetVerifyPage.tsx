import React, { FC } from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IPasswordResetRequest } from "../../typings/interfaces/requests"; // Update this import to match your request interface
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { resetPassword as resetPasswordAction } from "../../redux/actions/AuthAction"; // Update this import to match your action
import { PublicUserLayout } from "../../components";
import { LoadingButton } from "@mui/lab";
import { IBaseResponse } from "../../typings";
import { useLocation, useNavigate } from "react-router-dom";

export const PasswordResetVerifyPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const emailFromQueryParam = decodeURIComponent(queryParams.get("email") || "");

  const { passwordResetLoading, passwordResetError } = useAppSelector(
    (state) => state.auth
  );

  const formik = useFormik<{
    verifyCode: string,
    newPassword: string,
    confirmPassword: string,
  }>({
    initialValues: {
      verifyCode: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      verifyCode: Yup.string()
        .matches(/^[0-9]{6}$/, "Must be exactly 6 digits")
        .required("Required"),
      newPassword: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword"), ""], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
        const passwordResetRequest: IPasswordResetRequest = {
            code: values.verifyCode,
            email: emailFromQueryParam,
            password: values.confirmPassword
        }
      dispatch(resetPasswordAction(passwordResetRequest)).then((res) => {
        const response: IBaseResponse<{email:string}> = res.payload as IBaseResponse<{email:string}>;
        if (response.status === "success") {
          navigate("/auth/login");
        } else if(response.status  ==="invalid-code"){
            formik.setFieldError("verifyCode", "Verification code invalid!");
        }
        else {
            formik.setFieldError("verifyCode", "Something went wrong. Please Try again!");
        }
      });
    },
  });

  return (
    <PublicUserLayout>
      <Container maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="verifyCode"
              name="verifyCode"
              label="Verification Code"
              value={formik.values.verifyCode}
              onChange={formik.handleChange}
              error={
                formik.touched.verifyCode && Boolean(formik.errors.verifyCode)
              }
              helperText={formik.touched.verifyCode && formik.errors.verifyCode}
              margin="normal"
              inputProps={{
                maxLength: 6,
                inputMode: "numeric",
                pattern: "[0-9]*",
              }}
            />
            <TextField
              fullWidth
              id="newPassword"
              name="newPassword"
              label="New Password"
              type="password"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.newPassword &&
                Boolean(formik.errors.newPassword)
              }
              helperText={
                formik.touched.newPassword && formik.errors.newPassword
              }
              margin="normal"
            />
            <TextField
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword &&
                formik.errors.confirmPassword
              }
              margin="normal"
            />
            <LoadingButton
              loading={passwordResetLoading}
              disabled={passwordResetLoading}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset Password
            </LoadingButton>
            {passwordResetError && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="error">
                  {passwordResetError}
                </Typography>
              </Box>
            )}
          </form>
        </Box>
      </Container>
    </PublicUserLayout>
  );
};

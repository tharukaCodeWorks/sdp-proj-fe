import React, { FC } from "react";
import { useFormik } from "formik";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import { loginFormValidationSchema } from "../../data/form-data/formValidationSchema";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  authenticateUser,
  forgotPassword,
} from "../../redux/actions/AuthAction";
import { ILoginRequest } from "../../typings/interfaces/requests";
import LoadingButton from "@mui/lab/LoadingButton";
import { PublicUserLayout } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import {
  IBaseResponse,
  ILoginResponse,
} from "../../typings/interfaces/responses";
import { logout, setVerifyEmail } from "../../redux/slice/AuthSlice";

export const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loginError, loginLoading, user, forgotPasswordLoading } =
    useAppSelector((state) => state.auth);
  const hostname = window.location.hostname;
  const appUser =
    hostname === "dashboard.localhost"
      ? [
          "ADMIN",
          "DIVITIONAL_ADMIN",
          "BEAT_OFFICER",
          "NATIONAL_DEPARTMENT_ADMIN",
          "NATIONAL_ADMIN",
        ]
      : ["PUBLIC"];

  const navigateToPage = (page: string) => {
    navigate(page);
  };

  const formik = useFormik<ILoginRequest>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFormValidationSchema,
    onSubmit: (values) => {
      dispatch(authenticateUser(values)).then((res) => {
        const response: ILoginResponse = res.payload as ILoginResponse;
     
        if (response.status === "un-verified") {
          dispatch(setVerifyEmail({ email: values.email }));
        } else if (response.status === "first-password-not-reset") {
          console.log("Inside if")
          dispatch(forgotPassword({ email: values.email })).then((res) => {
            const response = res.payload as IBaseResponse<{ email: string }>;
            if (response.status === "success") {
              navigate(
                `/auth/password-reset?email=${encodeURIComponent(
                  response.body.email
                )}`
              );
            }
          });
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
            Sign in
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              margin="normal"
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              margin="normal"
            />
            <LoadingButton
              loading={loginLoading || forgotPasswordLoading}
              disabled={loginLoading || forgotPasswordLoading}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </LoadingButton>
            {loginError && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="error">
                  {loginError}
                  {user?.status === "un-verified" && (
                    <>
                      <Link
                        onClick={() => {
                          navigateToPage("/auth/verify-email");
                        }}
                        // to="/auth/verify-email"
                        style={{ textDecoration: "none" }}
                        to={""}
                      >
                        &nbsp;&nbsp;Verify now
                      </Link>
                    </>
                  )}
                </Typography>
              </Box>
            )}
            <Typography variant="body2" sx={{ mt: 2 }}>
              <Link
                onClick={() => {
                  navigateToPage("/auth/forgot-password");
                }}
                to=""
                style={{ textDecoration: "none" }}
              >
                Forgot Password?
              </Link>
            </Typography>
            <Typography variant="body2">
              Not yet registered?{" "}
              <Link
                onClick={() => {
                  navigateToPage("/auth/signup");
                }}
                to=""
                style={{ textDecoration: "none" }}
              >
                Sign Up
              </Link>
            </Typography>
          </form>
        </Box>
      </Container>
    </PublicUserLayout>
  );
};

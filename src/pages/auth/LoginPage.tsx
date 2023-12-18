import React, { FC } from "react";
import { useFormik } from "formik";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import { loginFormValidationSchema } from "../../data/formValidationSchema";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { authenticateUser } from "../../redux/actions/AuthAction";
import { ILoginRequest } from "../../typings/interfaces/requests";
import LoadingButton from "@mui/lab/LoadingButton";
import { PublicUserLayout } from "../../components";
import { Link } from "react-router-dom";
import { ILoginResponse } from "../../typings/interfaces/responses";
import { setVerifyEmail } from "../../redux/slice/AuthSlice";

export const LoginPage: FC = () => {
  const dispatch = useAppDispatch();
  const { loginError, loginLoading, user } = useAppSelector(
    (state) => state.auth
  );

  const formik = useFormik<ILoginRequest>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFormValidationSchema,
    onSubmit: (values) => {
      dispatch(authenticateUser(values)).then((res) => {
        console.log("Res: ", res);
        const response: ILoginResponse = res.payload as ILoginResponse;
        if (response.status === "un-verified") {
          dispatch(setVerifyEmail({ email: values.email }));
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
              loading={loginLoading}
              disabled={loginLoading}
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
                        to="/auth/verify-email"
                        style={{ textDecoration: "none" }}
                      >
                        &nbsp;&nbsp;Verify now
                      </Link>
                    </>
                  )}
                </Typography>
              </Box>
            )}
            <Typography variant="body2" sx={{ mt: 2 }}>
              <a
                href="/auth/forgot-password"
                style={{ textDecoration: "none" }}
              >
                Forgot Password?
              </a>
            </Typography>
            <Typography variant="body2">
              Not yet registered?{" "}
              <a href="/auth/signup" style={{ textDecoration: "none" }}>
                Sign Up
              </a>
            </Typography>
          </form>
        </Box>
      </Container>
    </PublicUserLayout>
  );
};

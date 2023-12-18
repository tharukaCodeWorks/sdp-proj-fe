import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import { signupFormValidationSchema } from "../../data/formValidationSchema";
import { PublicUserLayout } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { signupUser } from "../../redux/actions/AuthAction";
import { LoadingButton } from "@mui/lab";
import { ISignupResponse } from "../../typings/interfaces/responses";
import { useNavigate } from "react-router-dom";
import { setVerifyEmail } from "../../redux/slice/AuthSlice";

export const SignupPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { signupUserError, signupUserLoading } = useAppSelector(
    (state) => state.auth
  );
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: signupFormValidationSchema,
    onSubmit: (values) => {
      dispatch(signupUser(values)).then((res) => {
        const response = res.payload as ISignupResponse;
        if (response.status === "success") {
          navigate("/auth/verify-email");
          dispatch(setVerifyEmail({ email: values.email }));
        }
      });
    },
  });

  return (
    <PublicUserLayout>
      <Container maxWidth="sm" sx={{ pb: 4 }}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              label="First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
              margin="normal"
            />
            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              label="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
              margin="normal"
            />

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
              loading={signupUserLoading}
              disabled={signupUserLoading}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </LoadingButton>
            {signupUserError && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="error">
                  {signupUserError}
                </Typography>
              </Box>
            )}
            <Typography variant="body2" sx={{ mt: 2 }}>
              Already registered?{" "}
              <a href="/auth/login" style={{ textDecoration: "none" }}>
                Sign In
              </a>
            </Typography>
          </form>
        </Box>
      </Container>
    </PublicUserLayout>
  );
};

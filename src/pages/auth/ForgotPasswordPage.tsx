import React, { FC } from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { PublicUserLayout } from "../../components";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { LoadingButton } from "@mui/lab";
import { forgotPassword } from "../../redux/actions/AuthAction";
import { IBaseResponse } from "../../typings";

// Define the validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const ForgotPasswordPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { forgotPasswordLoading } = useAppSelector((state) => state.auth);

  // Define the formik form
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(forgotPassword(values)).then((res) => {
        const response = res.payload as IBaseResponse<{ email: string }>;
        if (response.status === "success" && response.body !== null) {
          navigate(`/auth/password-reset?email=${encodeURIComponent(response.body.email)}`);
        } else {
          formik.setFieldError("email", "Something went wrong. Try again!");
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
            Forgot Password
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              margin="normal"
            />
            <LoadingButton
              loading={forgotPasswordLoading}
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              disabled={forgotPasswordLoading}
              sx={{ mt: 3, mb: 2 }}
            >
              Reset Password
            </LoadingButton>
          </form>
        </Box>
      </Container>
    </PublicUserLayout>
  );
};

export default ForgotPasswordPage;

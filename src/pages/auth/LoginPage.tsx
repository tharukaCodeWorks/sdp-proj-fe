import React, { FC } from "react";
import { useFormik } from "formik";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import { loginFormValidationSchema } from "../../data/formValidationSchema";

export const LoginPage: FC = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFormValidationSchema,
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  return (
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
          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Typography variant="body2" sx={{ mt: 2 }}>
            <a href="/auth/forgot-password" style={{ textDecoration: "none" }}>
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
  );
};

import React, { FC, useState } from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IEmailVerifyRequest } from "../../typings/interfaces/requests";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { verifyEmail as verifyEmailAction } from "../../redux/actions/AuthAction";
import { PublicUserLayout } from "../../components";
import { LoadingButton } from "@mui/lab";
import { IEmailVerifyResponse } from "../../typings/interfaces/responses";
import { useNavigate } from "react-router-dom";

export const EmailVerifyPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  
  const { verifyEmail, emailVerifyLoading, emailVerifyError } = useAppSelector(
    (state) => state.auth
  );

  const formik = useFormik<IEmailVerifyRequest>({
    initialValues: {
      verifyCode: "",
      email: verifyEmail || "",
    },
    validationSchema: Yup.object({
      verifyCode: Yup.string()
        .matches(/^[0-9]{6}$/, "Must be exactly 6 digits")
        .required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(verifyEmailAction(values)).then(res=>{
        const response: IEmailVerifyResponse = res.payload as IEmailVerifyResponse;
        if(response.status==="success") {
          navigate("/auth/login");
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
            Verify Account
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
            <LoadingButton
              loading={emailVerifyLoading}
              disabled={emailVerifyLoading}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              sx={{ mt: 3, mb: 2 }}
            >
              Verify Email
            </LoadingButton>
            {emailVerifyError && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="error">
                  {emailVerifyError}
                </Typography>
              </Box>
            )}
          </form>
        </Box>
      </Container>
    </PublicUserLayout>
  );
};

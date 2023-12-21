import React, { SyntheticEvent, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Container,
  TextField,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Snackbar,
  Button,
} from "@mui/material";
import { PublicUserLayout } from "../../components";
import { useDivisionHook } from "../../hooks/useDivisionHook";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { createComplaint } from "../../redux/actions/ComplaintAction";
import { LoadingButton } from "@mui/lab";
import { ComplaintPriority } from "../../typings";
import { COMPLAINT_PRIORITIES } from "../../data/form-data/complaintPriority";
import { ICreateComplaintResponse } from "../../typings/interfaces/responses/createComplaintResponse";

const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  divisionId: Yup.string().required("Required"),
  province: Yup.string().required("Required"),
  department: Yup.string().required("Required"),
  priority: Yup.string().required("Required"),
  // Add other fields validation as needed
});

export const NewComplaintPage = () => {
  const { provinceList, getDivisionByProvinceAndDepartment } =
    useDivisionHook();
  const { departments, createComplaintLoading, createComplaintError } =
    useAppSelector((state) => state.compalint);
  const dispatch = useAppDispatch();
  const [snackShow, setSnackShow] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      divisionId: "",
      province: "",
      department: "",
      priority: ComplaintPriority.LOW,
      // Initialize other fields here
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(createComplaint(values)).then((res) => {
        const respose = res.payload as ICreateComplaintResponse;
        if (respose.status === "success") {
          formik.resetForm();
          setSnackShow(true);
        }
      });
    },
  });

  const handleSnackClose = () => {
    setSnackShow(false);
  };

  return (
    <PublicUserLayout>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h6">Report a Complaint</Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Complaint Title"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              margin="normal"
            />
            <TextField
              fullWidth
              id="description"
              name="description"
              label="Description"
              multiline
              rows={4}
              value={formik.values.description}
              onChange={formik.handleChange}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="department-label">Department</InputLabel>
              <Select
                labelId="department-label"
                id="department"
                name="department"
                value={formik.values.department}
                label="Department"
                onChange={formik.handleChange}
                error={
                  formik.touched.department && Boolean(formik.errors.department)
                }
              >
                {departments?.body.map((department) => (
                  <MenuItem key={department.id} value={department.id}>
                    {department.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel id="province-label">Province</InputLabel>
              <Select
                labelId="province-label"
                id="province"
                name="province"
                value={formik.values.province}
                label="Province"
                onChange={formik.handleChange}
                error={
                  formik.touched.province && Boolean(formik.errors.province)
                }
              >
                {provinceList.map((province) => (
                  <MenuItem key={province} value={province}>
                    {province}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel id="divisionId-label">Division</InputLabel>
              <Select
                labelId="divisionId-label"
                id="divisionId"
                name="divisionId"
                value={formik.values.divisionId}
                label="Division"
                onChange={formik.handleChange}
                error={
                  formik.touched.divisionId && Boolean(formik.errors.divisionId)
                }
              >
                {formik.values.province &&
                  formik.values.department &&
                  getDivisionByProvinceAndDepartment(
                    formik.values.province
                  )?.map((division) => (
                    <MenuItem key={division.id} value={division.id}>
                      {division.divisionName}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel id="priority-label">Priority</InputLabel>
              <Select
                labelId="priority-label"
                id="priority"
                name="priority"
                value={formik.values.priority}
                label="Priority"
                onChange={formik.handleChange}
                error={
                  formik.touched.priority && Boolean(formik.errors.priority)
                }
              >
                {COMPLAINT_PRIORITIES.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* Add other fields as needed */}
            <LoadingButton
              loading={createComplaintLoading}
              disabled={createComplaintLoading}
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Complaint
            </LoadingButton>
            {createComplaintError && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="error">
                  {createComplaintError}
                </Typography>
              </Box>
            )}
          </form>
        </Box>
        <Snackbar
          open={snackShow}
          autoHideDuration={6000}
          onClose={handleSnackClose}
          color="success"
          message="New Complaint Added Successfully!"
          action={
            <Button color="success" size="small" onClick={handleSnackClose}>
              CLOSE
            </Button>
          }
        />
      </Container>
    </PublicUserLayout>
  );
};

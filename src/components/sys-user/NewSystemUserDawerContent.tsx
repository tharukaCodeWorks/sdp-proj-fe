import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { FC } from "react";
import { newSystemUserValidationScema } from "../../data";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { ICreateOfficerResponse, SystemUserLevel } from "../../typings";
import { LoadingButton } from "@mui/lab";
import { createOfficer } from "../../redux/actions/UsersAction";
import { ICreateOfficerRequest } from "../../typings/interfaces/requests/createOfficerRequest";

export interface INewSystemUserDrawerContentProps {
  onSaved():void;
}

export const NewSystemUserDrawerContent: FC<INewSystemUserDrawerContentProps> = ({onSaved}) => {
  const { divisions, departments } = useAppSelector((state) => state.compalint);
  const { createOfficerLoading } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      systemUserLevel: "",
      departmentId: "",
      divisionId: "",
    },
    validationSchema: newSystemUserValidationScema,
    onSubmit: (values: ICreateOfficerRequest) => {
      dispatch(createOfficer(values)).then(res=>{
        const response = res.payload as ICreateOfficerResponse;
        if(response.status==="success") {
          onSaved();
        }
      });
    },
  });

  const getUserLevels = () => {
    const list: Array<{
      text: string;
      value: string;
    }> = [];
    Object.keys(SystemUserLevel).forEach((key) => {
      const value = SystemUserLevel[key as keyof typeof SystemUserLevel];
      list.push({
        text: value,
        value: key,
      });
    });
    return list;
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="firstName"
        name="firstName"
        label="First Name"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
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
      <FormControl fullWidth margin="normal">
        <InputLabel id="systemUserLevel-label">User Type</InputLabel>
        <Select
          labelId="systemUserLevel-label"
          id="systemUserLevel"
          name="systemUserLevel"
          value={formik.values.systemUserLevel}
          label="User Type"
          onChange={formik.handleChange}
        >
          {getUserLevels().map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel id="departmentId-label">Department</InputLabel>
        <Select
          labelId="departmentId-label"
          id="departmentId"
          name="departmentId"
          value={formik.values.departmentId}
          label="Department"
          onChange={formik.handleChange}
        >
          {departments?.body.map((department) => (
            <MenuItem key={department.id} value={department.id}>
              {department.name}
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
        >
          {divisions?.body?.map((division: any) => (
            <MenuItem key={division.id} value={division.id}>
              {division.divisionName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <LoadingButton
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        sx={{ mt: 3, mb: 2 }}
        disabled={createOfficerLoading}
        loading={createOfficerLoading}
      >
        Create User
      </LoadingButton>
    </form>
  );
};

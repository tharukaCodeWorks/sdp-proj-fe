import React, { ReactNode, useEffect } from "react";
import axios from "axios";

import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { setUserToken } from "../../../redux/slice/AuthSlice";
import { getAllDepartments, getAllDivisions } from "../../../redux/actions/ComplaintAction";

export interface IAppInitializationProps {
  children: ReactNode;
}

export const AppInitialization: React.FC<IAppInitializationProps> = ({
  children,
}) => {
  const dispatch = useAppDispatch();
  const {token} = useAppSelector(state=>state.auth);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      dispatch(setUserToken({ token, user: JSON.parse(user) }));

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, [dispatch]);

  useEffect(()=>{
    if(token) {
        dispatch(getAllDivisions());
        dispatch(getAllDepartments());
    }
  },[token])

  return <>{children}</>;
};

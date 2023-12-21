import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../hooks/reduxHooks";

export interface IProtectedRouteGuardProps {
  children: ReactNode;
}

export const ProtectedRouteGuard: React.FC<IProtectedRouteGuardProps> = ({ children }) => {
  const { token } = useAppSelector((state) => state.auth);

  if (!token) {
    return <Navigate to="/auth/login" />;
  }

  return <>{children}</>;
};

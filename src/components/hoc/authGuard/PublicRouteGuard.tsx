import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../hooks/reduxHooks";

export interface IPublicRouteGuardProps {
  children: ReactNode;
}

export const PublicRouteGuard: React.FC<IPublicRouteGuardProps> = ({ children }) => {
  const { token } = useAppSelector((state) => state.auth);

  if (token) {
    return <Navigate to="/app/my-complaints" />;
  }

  return <>{children}</>;
};

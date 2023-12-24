import { Navigate, createBrowserRouter } from "react-router-dom";

import {
  MainDashboardPage,
  PublicDashboardPage,
  NotFoundPage,
  LoginPage,
  ComplaintsPage,
} from "../pages";
import { SignupPage } from "../pages/auth/SignupPage";
import { ProtectedRouteGuard, PublicRouteGuard } from "../components";
import { EmailVerifyPage } from "../pages/auth/EmailVerifyPage";
import { NewComplaintPage } from "../pages/public-dashboard/NewComplaintPage";
import { OfficerDashboardPage } from "../pages/dashboard/OfficerDashboardPage";
import { ManageUsersPage } from "../pages/dashboard/ManageUsersPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import { PasswordResetVerifyPage } from "../pages/auth/PasswordResetVerifyPage";

const notFoundPage = {
  path: "*",
  element: <NotFoundPage />,
};

const authPages = [
  {
    path: "/auth/login",
    element: (
      <PublicRouteGuard>
        <LoginPage />
      </PublicRouteGuard>
    ),
  },
  {
    path: "/auth/signup",
    element: (
      <PublicRouteGuard>
        <SignupPage />
      </PublicRouteGuard>
    ),
  },
  {
    path: "/auth/verify-email",
    element: (
      <PublicRouteGuard>
        <EmailVerifyPage />
      </PublicRouteGuard>
    ),
  },
  {
    path: "/auth/forgot-password",
    element: (
      <PublicRouteGuard>
        <ForgotPasswordPage />
      </PublicRouteGuard>
    ),
  },
  {
    path: "/auth/password-reset",
    element: (
      <PublicRouteGuard>
        <PasswordResetVerifyPage />
      </PublicRouteGuard>
    ),
  },
];

const createRoutes = () => {
  const hostname = window.location.hostname;

  if (hostname === "dashboard.localhost") {
    return [
      {
        path: "/",
        element: (
          <ProtectedRouteGuard>
            <MainDashboardPage />
          </ProtectedRouteGuard>
        ),
      },
      {
        path: "/app/workspace",
        element: (
          <ProtectedRouteGuard>
            <OfficerDashboardPage/>
          </ProtectedRouteGuard>
        ),
      },
      {
        path: "/app/manage-users",
        element: (
          <ProtectedRouteGuard>
            <ManageUsersPage/>
          </ProtectedRouteGuard>
        ),
      },
      ...authPages,
      notFoundPage,
    ];
  } else {
    return [
      {
        path: "/",
        element: <PublicDashboardPage />,
      },
      {
        path: "/app/my-complaints",
        element: (
          <ProtectedRouteGuard>
            <ComplaintsPage />
          </ProtectedRouteGuard>
        ),
      },
      {
        path: "/app/new-complaint",
        element: (
          <ProtectedRouteGuard>
            <NewComplaintPage />
          </ProtectedRouteGuard>
        ),
      },
      ...authPages,
      notFoundPage,
    ];
  }
};

const routers = createBrowserRouter(createRoutes());

export { routers };

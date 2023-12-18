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
import ContactUs from "../pages/public-dashboard/ContactUs";
import AboutUs from "../pages/public-dashboard/AboutUs";
import TermsAndConditions from "../pages/public-dashboard/TermsAndConditions";
import PrivacyPolicy from "../pages/public-dashboard/PrivacyPolicy";

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
  {
    path: "/app/contact-us",
    element: (
      <PublicRouteGuard>
        <ContactUs />
      </PublicRouteGuard>
    ),
  },
  {
    path: "/app/about-us",
    element: (
      <PublicRouteGuard>
        <AboutUs />
      </PublicRouteGuard>
    ),
  },
  {
    path: "/app/terms-and-conditions",
    element: (
      <PublicRouteGuard>
        <TermsAndConditions />
      </PublicRouteGuard>
    ),
  },
  {
    path: "/app/privacy-policy",
    element: (
      <PublicRouteGuard>
        <PrivacyPolicy />
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
        element: <MainDashboardPage />,
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
      ...authPages,
      notFoundPage,
    ];
  }
};

const routers = createBrowserRouter(createRoutes());

export { routers };

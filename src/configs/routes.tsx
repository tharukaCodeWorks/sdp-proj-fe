import { Navigate, createBrowserRouter } from "react-router-dom";

import {
  MainDashboardPage,
  PublicDashboardPage,
  NotFoundPage,
  LoginPage,
} from "../pages";
import { SignupPage } from "../pages/auth/SignupPage";

const notFoundPage = {
  path: "*",
  element: <NotFoundPage />,
};

const authPages = [
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path: "/auth/signup",
    element: <SignupPage />,
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

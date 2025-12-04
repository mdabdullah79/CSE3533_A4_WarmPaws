import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../layouts/MainLayout";
import test from "../Pages/test";
import Services from "../Pages/Services";
import Authentication from "../Pages/Authentication";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import ServiceDetails from "../Pages/ServicesDeatils";
import PrivateRoutes from "./PrivateRoutes";
import ProfilePage from "../Pages/Profile";
import ForgotPassword from "../Pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("/json/servicesdata.json"),
        Component: Home,
      },
      {
        path: "/services",
        loader: () => fetch("/json/servicesdata.json"),
        Component: Services,
      },
      {
        path: "profile",
        element: (
          <PrivateRoutes>
            <ProfilePage />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/signup",
        Component: SignUp,
      },
    ],
  },
  {
    path: "/service-details/:id",
    element: (
      <PrivateRoutes>
        <ServiceDetails></ServiceDetails>
      </PrivateRoutes>
    ),
    loader: () => fetch("/json/servicesdata.json"),
  },
  {
    path: "/auth/forgot-password",
    element: <ForgotPassword />,
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/dashboard/Home";
import PrivateRoute from "../component/Helper/PrivateRoute";
import Dashboard from "../pages/dashboard/Dashboard";
import AuthLayout from "../pages/authentication/AuthLayout";

const router = createBrowserRouter([
    { path: "/login", element: <AuthLayout /> },
    { path: "/", element: <PrivateRoute><Home /></PrivateRoute> },
    { path: "/dashboard", element: <PrivateRoute><Dashboard /></PrivateRoute> },
]);

export default router;
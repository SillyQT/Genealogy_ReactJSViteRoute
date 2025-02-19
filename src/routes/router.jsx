import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/dashboard/Home";
import PrivateRoute from "../component/Helper/PrivateRoute";
import Dashboard from "../pages/dashboard/Dashboard";
import AuthLayout from "../pages/authentication/AuthLayout";
import LoginForm from "../pages/authentication/LoginForm";
import RegisterForm from "../pages/authentication/RegisterForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute><Home /></PrivateRoute>,
        children: [
            { path: "dashboard", element: <PrivateRoute><Dashboard /></PrivateRoute> },
        ],
    },
    {
        path: "/login",
        element: <AuthLayout />,
        children: [
            { path: "", element: <LoginForm /> },
        ],
    },
    {
        path: "/register",
        element: <AuthLayout />,
        children: [
            { path: "", element: <RegisterForm /> },
        ],
    },
]);

export default router;
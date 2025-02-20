import { createBrowserRouter } from "react-router-dom";
import ProfileSettings from "../pages/dashboard/ProfileSettings";
import PrivateRoute from "../components/Helper/PrivateRoute";
import Home from "../pages/dashboard/Home";
import AuthLayout from "../pages/authentication/AuthLayout";
import LoginForm from "../components/Form/LoginForm";
import RegisterForm from "../components/Form/RegisterForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute><Home /></PrivateRoute>,
        children: [
            // { path: "home", element: <PrivateRoute><Home /></PrivateRoute> },
        ],
    },
    {
        path: "/profile",
        element: <PrivateRoute><ProfileSettings /></PrivateRoute>,
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
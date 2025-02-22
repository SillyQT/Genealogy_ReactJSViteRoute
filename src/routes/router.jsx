import { createBrowserRouter, Navigate  } from "react-router-dom";
import ProfileSettings from "../pages/dashboard/ProfileSettings";
import PrivateRoute from "../components/Helper/PrivateRoute";
import Home from "../pages/dashboard/Home";
import AuthLayout from "../pages/authentication/AuthLayout";
import LoginForm from "../components/Form/LoginForm";
import RegisterForm from "../components/Form/RegisterForm";
import Testapp from "../components/AppBar";
import AdminPage from "../pages/dashboard/Admin";
// import GridNoteLayout from "../components/Form/GridNoteLayout";

const router = createBrowserRouter([
    {   //test
        path: "/test",
        element: <Testapp />,
        children: [
            // { path: "", element: <PrivateRoute><GridNoteLayout /></PrivateRoute> },
        ],
    },
    {
        path: "/",
        element: <PrivateRoute><Home /></PrivateRoute>,
        children: [
            // { path: "", element: <PrivateRoute><GridNoteLayout /></PrivateRoute> },
        ],
    },
    {
        path: "/home",
        element: <PrivateRoute><Navigate to="/" replace /></PrivateRoute>,
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
    {
        path: "/admin",
        element: <AdminPage/>,
    },
]);

export default router;
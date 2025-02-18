import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
// import PrivateRoute from "../component/PrivateRoute";
// import Dashboard from "../pages/Dashboard";
// import AuthLayout from "../pages/authentication/AuthLayout";

const router = createBrowserRouter([
    // { path: "/login", element: <AuthLayout /> },
    { path: "/", element: <Home /> },
    // { path: "/dashboard", element: <PrivateRoute><Dashboard /></PrivateRoute> },
]);

export default router;
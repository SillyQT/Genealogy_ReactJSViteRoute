import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import AuthLayout from "../pages/authentication/AuthLayout";

export default function PrivateRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return isAuthenticated ? children : <AuthLayout />;
}
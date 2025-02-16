import React from "react";
import { Navigate, Outlet, useLocation } from "react-router";

const RequiredAuth = ({ login }) => {
  const userLogin = login;

  const location = useLocation();

  //   browner history

  return (
    <React.Fragment>
      {userLogin ? (
        <Outlet />
      ) : (
        <Navigate to="/" state={{ from: location }} replace />
      )}
    </React.Fragment>
  );
};

export default RequiredAuth;

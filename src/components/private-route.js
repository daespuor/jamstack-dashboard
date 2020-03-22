import React from "react";
import { navigate } from "@reach/router";
import { useIdentityContext } from "react-netlify-identity";

const PrivateRoute = ({ location, component: Component, rest }) => {
  const identity = useIdentityContext();
  const isLoggedIn = identity && identity.isLoggedIn;

  if (!isLoggedIn && location.pathname !== "/dashboard/login") {
    navigate("/dashboard/login", { replace: true });
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;

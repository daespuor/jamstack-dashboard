import React from "react";
import { navigate } from "@reach/router";
import { useIdentityContext } from "react-netlify-identity";

const RouteLogin = ({ showDialog }) => {
  const identity = useIdentityContext();
  debugger;
  if (identity && identity.isLoggedIn) {
    navigate("/dashboard/secret", { replace: true });
  }
  return (
    <>
      <h1>Log In or Sign Up</h1>
      <button onClick={showDialog}>Login</button>
    </>
  );
};

export default RouteLogin;

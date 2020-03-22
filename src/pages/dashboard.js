import React, { useEffect, useState } from "react";
import { Router } from "@reach/router";
import Layout from "../components/layout";
import Profile from "../components/profile";
import RouteBase from "../components/route-base";
import RouteSecret from "../components/route-secret";
import RouteLogin from "../components/route-login";
import { navigate } from "gatsby";
import { IdentityModal } from "react-netlify-identity-widget";
import "react-netlify-identity-widget/styles.css";
import PrivateRoute from "../components/private-route";

const Dashboard = ({ location }) => {
  const [visualize, setVisualize] = useState(false);
  const showDialog = () => setVisualize(!visualize);
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true });
    }
  }, []);
  return (
    <Layout>
      <Profile showDialog={showDialog} />
      <Router>
        <PrivateRoute path="/dashboard/base" component={RouteBase} />
        <PrivateRoute path="/dashboard/secret" component={RouteSecret} />
        <RouteLogin path="/dashboard/login" showDialog={showDialog} />
      </Router>
      <IdentityModal showDialog={visualize} onCloseDialog={showDialog} />
    </Layout>
  );
};

export default Dashboard;

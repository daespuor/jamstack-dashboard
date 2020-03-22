import React from "react";
import { Link } from "gatsby";
import "./layout.module.css";
import { IdentityContextProvider } from "react-netlify-identity";
const Layout = ({ children }) => (
  <>
    <IdentityContextProvider url="https://jamstack-dashboard.netlify.com">
      <header>
        <Link to="/">JAMStack App</Link>
      </header>
      <main>{children}</main>
    </IdentityContextProvider>
  </>
);

export default Layout;

import React from "react";
import { Link } from "gatsby";
import "./layout.module.css";

const Layout = ({ children }) => (
  <>
    <header>
      <Link to="/">JAMStack App</Link>
    </header>
    <main>{children}</main>
  </>
);

export default Layout;

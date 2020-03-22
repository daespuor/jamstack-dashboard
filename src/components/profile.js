import React from "react";
import { Link } from "gatsby";
import styles from "./layout.module.css";
import { useIdentityContext } from "react-netlify-identity";
const Profile = ({ showDialog }) => {
  const identity = useIdentityContext();
  const isLoggedIn = identity && identity.isLoggedIn;
  const name =
    identity &&
    identity.user &&
    identity.user.user_metadata &&
    identity.user.user_metadata.full_name;
  return (
    isLoggedIn && (
      <div className={styles.dashboardHeader}>
        <nav>
          <Link to="/dashboard/secret" activeClassName={styles.active}>
            Secret stuff
          </Link>
          <Link to="/dashboard/base" activeClassName={styles.active}>
            See your base
          </Link>
        </nav>
        <span>Logged in as {name}</span>
        <button onClick={showDialog}>Log out</button>
      </div>
    )
  );
};

export default Profile;

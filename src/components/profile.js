import React from "react";
import { Link } from "gatsby";
import styles from "./layout.module.css";
const Profile = () => {
  return (
    <div className={styles.dashboardHeader}>
      <nav>
        <Link to="/dashboard/secret" activeClassName={styles.active}>
          Secret stuff
        </Link>
        <Link to="/dashboard/base" activeClassName={styles.active}>
          See your base
        </Link>
      </nav>
      <span>TODO login info</span>
    </div>
  );
};

export default Profile;

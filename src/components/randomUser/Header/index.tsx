import React from "react";
import styles from './Header.module.scss'
import { Result } from "../userType";
import useRandomUser from "../useRandomUser";

import { Avatar, Typography } from "@mui/material";

function Header() {
  const { userAvatar, userName } = useRandomUser();

  return (
    <div className={styles.headerContainer}>
      <Avatar
        className={styles.userAvatar}
        alt="User Image"
        src={userAvatar}
      />

      <Typography className={styles.UserName}> {userName} </Typography>
    </div>
  );
}

export default Header;

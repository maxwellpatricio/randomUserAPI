import React, { useEffect } from "react";
import styles from "./randomUser.module.scss";

import { Card, Typography } from "@mui/material";
import Header from "./Header";
import Infos from "./Infos";
import Buttons from "./Buttons";

function UserCard() {
  return (
    <Card style={{backgroundColor: "#D2D7DF"}} className={styles.mainContainer}>
      {/* <Header /> */}

      <Infos />

      {/* <Buttons /> */}
    </Card>
  );
}

export default UserCard;

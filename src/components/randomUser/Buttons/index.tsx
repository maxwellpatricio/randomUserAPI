import React from "react";
import styles from "./Buttons.module.scss";
import useRandomUser from "../useRandomUser";

import { Avatar, Button, Typography } from "@mui/material";

function Buttons() {
  const { setShowMore, showMore } = useRandomUser();

  return (
    <>
    <div className={styles.buttonsContainer}>
      <Button variant="outlined" className={styles.btnText} onClick={() => setShowMore(!showMore) }>
        Mais Infos
      </Button>

      <Button
        variant="outlined"
        className={styles.btnText}
        onClick={() => location.reload()}
      >
        Novo usuário
      </Button>
    </div>
    </>
  )
}

export default Buttons;

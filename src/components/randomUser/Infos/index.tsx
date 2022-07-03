import React, { useState } from "react";
import styles from "./Infos.module.scss";
import useRandomUser from "../useRandomUser";

import { Avatar, Button, Typography } from "@mui/material";

function Infos() {
  const {
    userAge,
    userEmail,
    userPhone,
    userCity,
    userState,
    userCountry,
    userPostalCode,
    userGender,
    userAvatar,
    userName,
    userLastName,
    setShowMore,
    showMore,
    updateUserData,
  } = useRandomUser();

  return (
    <>
      {userAge ? (
        <div className={styles.infosContainer}>
          <div className={styles.headerContainer}>
            <Avatar
              className={styles.userAvatar}
              alt="User Image"
              src={userAvatar}
            />

            <Typography className={styles.UserName}>
              {" "}
              {userName} {userLastName}{" "}
            </Typography>
          </div>
          <div className={styles.Infos}>
            <div className={styles.gridInfos}>
              <Typography className={styles.info}>
                Sexo: {userGender}
              </Typography>
              <Typography className={styles.info}>Idade: {userAge}</Typography>
              <Typography className={styles.info}>
                Email: {userEmail}
              </Typography>
              <Typography className={styles.info}>
                Telefone: {userPhone}
              </Typography>
            </div>

            {showMore ? (
              <div className={styles.gridInfos}>
                <Typography className={styles.info}>
                  Cidade: {userCity}
                </Typography>
                <Typography className={styles.info}>
                  Estado: {userState}
                </Typography>
                <Typography className={styles.info}>
                  Pais: {userCountry}
                </Typography>
                <Typography className={styles.info}>
                  CEP: {userPostalCode}
                </Typography>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className={styles.buttonsContainer}>
        {showMore ? (
          <Button
            variant="outlined"
            className={styles.btnText}
            onClick={() => setShowMore(!showMore)}
          >
            Menos Infos
          </Button>
        ) : (
          <Button
            variant="outlined"
            className={styles.btnText}
            onClick={() => setShowMore(!showMore)}
          >
            Mais Infos
          </Button>
        )}

        <Button
          variant="outlined"
          className={styles.btnText}
          onClick={() => updateUserData()}
        >
          Novo usuário
        </Button>
      </div>
    </>
  );
}

export default Infos;

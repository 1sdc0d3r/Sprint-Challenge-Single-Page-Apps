import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function WelcomePage() {
  const useStyles = makeStyles({
    img: {
      margin: "auto"
    },
    welcome: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center"
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  });
  const classes = useStyles();

  return (
    <section className={("welcome-page", classes.welcome)}>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className={("main-img", classes.img)}
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}

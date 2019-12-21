import React from "react";
import CharacterCard from "./CharacterCard.js";
import { makeStyles } from "@material-ui/core/styles";

export default function CharacterList({ charList, search }) {
  const useStyles = makeStyles({
    card: {
      display: "flex",
      margin: "auto",
      flexWrap: "wrap",
      minWidth: 275
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  });
  const classes = useStyles();

  if (search.length === 0) {
    return (
      <section className="character-list card" className={classes.card}>
        {charList.map(e => (
          <CharacterCard char={e} />
        ))}
      </section>
    );
  } else {
    return (
      <section className="character-list card">
        {search.map(e => (
          <CharacterCard char={e} />
        ))}
      </section>
    );
  }
}

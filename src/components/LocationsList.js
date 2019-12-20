import React from "react";
import LocationCard from "./LocationCard";
import { makeStyles } from "@material-ui/core/styles";

export default function LocationsList({ locationList, search }) {
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
      <section className={classes.card}>
        {locationList.map(e => (
          <LocationCard location={e} />
        ))}
      </section>
    );
  } else {
    return (
      <section className="character-list card">
        {search.map(e => (
          <LocationCard location={e} />
        ))}
      </section>
    );
  }
}

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function CharacterCard({ char }) {
  const useStyles = makeStyles({
    card: {
      minWidth: 275
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
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
    <>
      {/* <img src={char.img} /> */}
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {char.id} {char.name}
          </Typography>
          <img src={char.image} />
          <Typography variant="h5" component="h2"></Typography>
          <Typography className={classes.pos} color="textSecondary">
            Species: {char.species}
          </Typography>
          <Typography variant="body2" component="p">
            <br />
            Current Status: {char.status}
            <br />
            Type: {char.type === "" ? "Not Available" : char.type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}
// return (
//   <div>
//     <h3>{char.name}</h3>
//     <p>{char.status}</p>
//     <p>{char.species}</p>
//     <p>{char.type}</p>
//   </div>
// );

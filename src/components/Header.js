import React from "react";
import { NavLink } from "react-router-dom";
import SearchForm from "./SearchForm";
import { makeStyles } from "@material-ui/core/styles";

export default function Header({ searchHandler, setSearch, charList }) {
  const useStyles = makeStyles({
    nav: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      margin: "auto"
      // border: "1px solid red"
    },
    links: {
      display: "flex",
      margin: "auto",
      justifyContent: "space-around",
      // border: "1px solid blue",
      width: "60%",
      marginBottom: "15px"
    },
    searchBar: {
      margin: "auto"
      // background: "blue"
    }
  });
  const classes = useStyles();

  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <nav className={classes.nav}>
        <div className={classes.links}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/char">Characters</NavLink>
          <NavLink to="/location">Location</NavLink>
        </div>
        <div className={classes.searchBar}>
          <SearchForm
            searchHandler={searchHandler}
            setSerach={setSearch}
            charList={charList}
          />
        </div>
      </nav>
    </header>
  );
}

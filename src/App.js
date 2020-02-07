import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import { Route } from "react-router-dom";
import axios from "axios";
import LocationsList from "./components/LocationsList.js";

//* characters: "https://rickandmortyapi.com/api/character";
//* locations: "https://rickandmortyapi.com/api/location";
//* episodes: "https://rickandmortyapi.com/api/episode";

export default function App() {
  const [charList, setCharList] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => setCharList(res.data.results))
      .catch(err => console.log(err));
    axios
      .get("https://rickandmortyapi.com/api/location")
      .then(res => setLocationList(res.data.results))
      .catch(err => console.log(err));
  }, []);

  const searchHandler = evt => {
    const value = evt.target.value.toLowerCase();
    setSearch(
      charList.filter(e => e.name.toLowerCase().includes(value)),
      locationList.filter(e => e.name.toLowerCase().includes(value))
    );
  };
  return (
    <main>
      {console.log(charList)}
      <Header
        searchHandler={searchHandler}
        setSearch={setSearch}
        charList={charList}
      />
      <Route path="/" exact>
        <WelcomePage />
      </Route>
      <Route path="/char">
        <CharacterList charList={charList} search={search} />
      </Route>
      <Route path="/location">
        <LocationsList locationList={locationList} search={search} />
      </Route>
    </main>
  );
}

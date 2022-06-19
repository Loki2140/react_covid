import React, { useState } from "react";
import { CountryList } from "./components/countryList/CountryList";
import { Header } from "./components/header/Header";
import "./App.css";

function App() {
  const [searchState, setSearchState] = useState("");
  return (
    <div className="App">
      <Header setSearchState={setSearchState} />
      <CountryList searchState={searchState} />
    </div>
  );
}

export default App;

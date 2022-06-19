import React, { useState } from "react";
import "./search.css";
import { SvgMagnifier } from "../SvgMagnifier";
// import { CountryList } from "../countryList/CountryList";

export function Search({ active, setActive }) {
  const [searchState, setSearchState] = useState(null);
  const handleOnChange = (event) => {
    setSearchState(event.target.value);
  };
  return (
    <div className="search">
      <input type="text" placeholder="Search..." onChange={handleOnChange} />
      <SvgMagnifier />
    </div>
  );
}

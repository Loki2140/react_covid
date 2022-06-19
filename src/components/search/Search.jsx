import React from "react";
import "./search.css";
import { SvgMagnifier } from "../SvgMagnifier";

export function Search({ setSearchState }) {
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

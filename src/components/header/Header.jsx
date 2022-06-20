import React from "react";
import { Search } from "../search/Search";
import "./header.css";
import { SvgLogo } from "../../SVG/Logo";

export function Header({ setSearchState }) {
  return (
    <div className="head">
      <div className="logo">
        <SvgLogo />
        <span>STATISTIC</span>
      </div>
      <Search setSearchState={setSearchState} />
    </div>
  );
}

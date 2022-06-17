import React from "react";
import { Search } from "../search/Search";
import "./header.css";
import { SvgLogo } from "../SvgLogo";

export function Header() {
  return (
    <div className="head">
      <div className="logo">
        <SvgLogo />
        <span>STATISTIC</span>
      </div>

      <Search />
    </div>
  );
}

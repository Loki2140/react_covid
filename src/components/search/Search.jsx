import React from "react";
import "./search.css";
import { SvgMagnifier } from "../SvgMagnifier";

export function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search..." />
      <SvgMagnifier />
    </div>
  );
}

import React from "react";
import "./country.css";

export function Country(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.Country}</td>
      <td>{props.TotalConfirmed}</td>
    </tr>
  );
}

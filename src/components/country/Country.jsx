import React from "react";
import "./country.css";
import { Modal } from "../modal/Modal";

export function Country({ id, country }) {
  const handlerOnClick = () => {
    Modal.onModalOpen("true");
  };
  return (
    <tr onClick={handlerOnClick}>
      <td>{id}</td>
      <td>{country.Country}</td>
      <td>{country.TotalConfirmed}</td>
    </tr>
  );
}

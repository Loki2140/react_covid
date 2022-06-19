import React, { useState } from "react";
import "./country.css";
import { Modal } from "../modal/Modal";

export function Country({ id, country }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handlerOnClick = () => {
    setIsModalOpen(true);
  };
  return (
    <tr onClick={handlerOnClick}>
      <td>{id}</td>
      <td>{country.Country}</td>
      <td>{country.TotalConfirmed}</td>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        country={country.Country}
        confirmed={country.TotalConfirmed}
        deaths={country.TotalDeaths}
        recovered={country.TotalRecovered}
      />
    </tr>
  );
}

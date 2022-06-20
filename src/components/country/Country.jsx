import React from "react";
import "./country.css";

export const Country = ({ country, setIsModalOpen, setModalData }) => {
  const handlerOnClick = () => {
    setModalData({
      country: country.Country,
      totalConfirmed: country.TotalConfirmed,
      totalDeaths: country.TotalDeaths,
      totalRecovered: country.TotalRecovered
    });

    setIsModalOpen(true);
  };
  return (
    <tr onClick={handlerOnClick}>
      <td>{country.seqNum}</td>
      <td>{country.Country}</td>
      <td>{country.TotalConfirmed}</td>
    </tr>
  );
};

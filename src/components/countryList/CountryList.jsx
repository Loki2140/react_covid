import React, { useState, useEffect } from "react";
import { Country } from "../country/Country";
import "./countryList.css";
import { Modal } from "../modal/Modal";
const API_COUNTRY_COVID = "https://api.covid19api.com/summary";

export function CountryList() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(API_COUNTRY_COVID)
      .then((res) => res.json())
      .then((data) => setData(data.Countries));
  }, []);
  return (
    <table className="flex-table">
      <thead>
        <tr>
          <th>№</th>
          <th>Country</th>
          <th>Total Confirmed</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((country, i) => (
            <Country id={i + 1} key={country.ID} country={country} />
          ))}
        <Modal />
      </tbody>
    </table>
  );
}

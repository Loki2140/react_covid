import React from "react";
import { Country } from "../country/Country";
import "./countryList.css";
import { useCountry } from "../../hooks/useCountry";

export function CountryList() {
  const data = useCountry();
  console.log(data);
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
            <Country
              id={i + 1}
              key={country.ID}
              TotalConfirmed={country.TotalConfirmed}
              Country={country.Country}
            />
          ))}
      </tbody>
    </table>
  );
}

import React from "react";
import { Country } from "../country/Country";
import { useCountry } from "../../hooks/useCountry";
import "./countryList.css";

export function CountryList({ searchState }) {
  const data = useCountry(null);
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
          data
            .filter((val) => {
              if (searchState === "") return val;
              return val.Country.toLowerCase().includes(
                searchState.toLowerCase()
              );
            })
            .map((country, i) => (
              <Country id={i + 1} key={country.ID} country={country} />
            ))}
      </tbody>
    </table>
  );
}

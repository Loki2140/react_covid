import { useState, useEffect } from "react";
const API_COUNTRY_COVID = "https://api.covid19api.com/summary";

export const useCountry = (state) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(API_COUNTRY_COVID)
      .then((res) => res.json())
      .then((data) => setData(data.Countries));
  }, [state]);
  return data;
};

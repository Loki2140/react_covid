import { useState, useEffect } from "react";
import { API_COUNTRY_COVID } from "../settings";

export const useCountry = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(API_COUNTRY_COVID)
      .then(setIsLoading(true))
      .then((res) => res.json())
      .then((data) => {
        data["Countries"].forEach((obj, i) => (obj["seqNum"] = i + 1));
        setData(data["Countries"]);
        setIsLoading(false);
      });
  }, []);
  return [data, setData, isLoading];
};

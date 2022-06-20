import React, { useState, useMemo } from "react";
import { Country } from "../country/Country";
import { useCountry } from "../../hooks/useCountry";
import { Modal } from "../modal/Modal";
import "./countryList.css";
import { ArrowDown } from "../../SVG/ArrowDown";
import { ArrowUp } from "../../SVG/ArrowUp";
import { Loader } from "./../../SVG/Loader";

export const CountryList = ({ searchState }) => {
  const [data, setData, isLoading] = useCountry();
  const [sortDir, setSortDir] = useState({
    Country: false,
    TotalConfirmed: true
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const sortData = (field) => {
    let copyData = data.concat();
    let copySortDir = { ...sortDir };

    if (copySortDir[field]) {
      copyData = copyData.sort((a, b) => {
        return a[field] > b[field] ? 1 : -1;
      });
    } else {
      copyData = copyData.sort((a, b) => {
        return a[field] < b[field] ? 1 : -1;
      });
    }
    copySortDir[field] = !copySortDir[field];

    setData(copyData);
    setSortDir(copySortDir);
  };

  const filterList = () => {
    let newData = data.filter((val) => {
      if (searchState === "") return val;
      return val.Country.toLowerCase().includes(searchState.toLowerCase());
    });
    return newData;
  };
  return (
    <>
      <table className="flex-table">
        <thead>
          <tr>
            <th onClick={() => sortData("Country")}>
              {sortDir.Country ? <ArrowUp /> : <ArrowDown />}№
            </th>
            <th onClick={() => sortData("Country")}>
              {sortDir.Country ? <ArrowUp /> : <ArrowDown />}
              Country
            </th>
            <th onClick={() => sortData("TotalConfirmed")}>
              {!sortDir.TotalConfirmed ? <ArrowUp /> : <ArrowDown />}
              Total Confirmed
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            filterList().map((country) => (
              <Country
                key={country.ID}
                country={country}
                setIsModalOpen={setIsModalOpen}
                setModalData={setModalData}
              />
            ))}
        </tbody>
      </table>
      {isLoading && <Loader className="loader" />}
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          modalData={modalData}
        />
      )}
    </>
  );
};

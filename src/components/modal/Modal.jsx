import React from "react";
import "./modal.css";
import { SvgHeart } from "../SvgHeart";
import { SvgDeaths } from "../SvgDeaths";
import { SvgRecovered } from "../SvgRecovered";

export function Modal({
  isOpen,
  setIsOpen,
  country,
  confirmed,
  deaths,
  recovered
}) {
  console.log(isOpen, setIsOpen, country, confirmed, deaths, recovered);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div
      onClick={closeModal}
      className={isOpen ? "modalOverlay active" : "modalOverlay"}
    >
      <div
        className={isOpen ? "modalWindow active" : "modalWindow"}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{country}</h2>
        <div>
          <div className="modal_el">
            <span>
              <SvgHeart />
              Total Confirmed
            </span>
            <span>{confirmed}</span>
          </div>
          <div className="modal_el">
            <div>
              <SvgDeaths />
              Total Deaths
            </div>

            <div>{deaths}</div>
          </div>
          <div className="modal_el">
            <div>
              <SvgRecovered />
              Total Recovered
            </div>
            <div>{recovered}</div>
          </div>
        </div>
        {/* <button onClick={closeModal}>OK</button> */}
      </div>
    </div>
  );
}

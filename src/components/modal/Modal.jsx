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
  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <td className={isOpen ? "modalOverlay active" : "modalOverlay"}>
      <div className={isOpen ? "modalWindow active" : "modalWindow"}>
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
        <button onClick={closeModal}>OK</button>
      </div>
    </td>
  );
}

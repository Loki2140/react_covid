import React from "react";
import "./modal.css";
import { SvgHeart as Heart } from "../../SVG/Heart";
import { SvgDeaths } from "../../SVG/Deaths";
import { SvgRecovered } from "../../SVG/Recovered";

export function Modal({ isModalOpen, setIsModalOpen, modalData }) {
  const { country, totalConfirmed, totalDeaths, totalRecovered } = modalData;
  const closeModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <div className={isModalOpen ? "modalOverlay active" : "modalOverlay"}>
      <div className={isModalOpen ? "modalWindow active" : "modalWindow"}>
        <h2>{country}</h2>
        <div>
          <div className="modal_el">
            <span>
              <Heart />
              Total Confirmed
            </span>
            <span>{totalConfirmed}</span>
          </div>
          <div className="modal_el">
            <div>
              <SvgDeaths />
              Total Deaths
            </div>

            <div>{totalDeaths}</div>
          </div>
          <div className="modal_el">
            <div>
              <SvgRecovered />
              Total Recovered
            </div>
            <div>{totalRecovered}</div>
          </div>
        </div>
        <button onClick={closeModal}>OK</button>
      </div>
    </div>
  );
}

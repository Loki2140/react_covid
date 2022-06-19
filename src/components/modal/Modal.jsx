import React from "react";
import { useState } from "react";
import "./modal.css";
import { SvgHeart } from "../SvgHeart";
import { SvgDeaths } from "../SvgDeaths";
import { SvgRecovered } from "../SvgRecovered";

export function Modal({ props }) {
  const [isOpen, setModal] = useState(false);
  // const onModalOpen = (type) => {
  //   setModal(type);
  // };
  const onHendlerClickOK = () => {
    isOpen && setModal({ isOpen: false });
  };
  return (
    isOpen && (
      <div className="modalOverlay">
        <div className="modalWindow">
          <h2>Albania</h2>
          <div>
            <div className="modal_el">
              <span>
                <SvgHeart />
                Total Confirmed
              </span>
              <span>2w1321312</span>
            </div>
            <div className="modal_el">
              <div>
                <SvgDeaths />
                Total Deaths
              </div>

              <div>32321321</div>
            </div>
            <div className="modal_el">
              <div>
                <SvgRecovered />
                Total Recovered
              </div>
              <div>123123</div>
            </div>
          </div>
          <button onClick={onHendlerClickOK}>OK</button>
        </div>
      </div>
    )
  );
}

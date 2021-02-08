import React from "react";
import "./CardFirm.css";

function CardFirm({
  style,
  title,
  cardData,
  Component,
  displayOptions = true,
  displayHeader = true,
  scaleOnHover = true,
}) {
  return (
    <div
      className={`${scaleOnHover ? "cardfirm" : "cardfirm_nohover"} ${
        style.style
      }`}
    >
      {displayHeader && (
        <div className="cardfirm__header">
          <h3 className="cardfirm__title">{title ? title : ""}</h3>
          {displayOptions && <span className="cardfirm__options"></span>}
        </div>
      )}
      <div className="cardfirm__component">
        <Component data={cardData} />
      </div>
    </div>
  );
}

export default CardFirm;

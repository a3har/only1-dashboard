import React from "react";
import "./Card.css";

function Card({ style, title, cardData, Component }) {
  return (
    <div className={`card ${style.style}`}>
      <div className="card__header">
        <h3 className="card__title">{title}</h3>
        <span className="card__options"></span>
      </div>
      <div className="card__component">
        <Component data={cardData} />
      </div>
    </div>
  );
}

export default Card;

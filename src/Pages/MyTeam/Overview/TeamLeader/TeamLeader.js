import React from "react";
import "./TeamLeader.css";

function TeamLeader({ data }) {
  return (
    <div className="teamleader">
      <div className="teamleader__image">
        <img src={data.img} alt="" className="object-cover h-28 w-24" />
      </div>
      <div className="teamleader__details">
        <div className="teamleader__name">{data.name}</div>
        <div className="teamleader__designation">{data.designation}</div>
      </div>
    </div>
  );
}

export default TeamLeader;

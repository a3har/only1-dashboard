import React from "react";
import "./TeamMember.css";

function TeamMember({ data }) {
  return (
    <div className="team_member">
      <div className="team_member__info">
        <div className="team_member__image">
          <img src={data.img} alt="" className="object-cover h-28 w-24" />
        </div>
        <div className="team_member__description">
          <div className="team_member__name">{data.name}</div>
          <div className="team_member__designation">{data.designation}</div>
        </div>
      </div>
      <div className="team_member__rating">{data.rating}</div>
    </div>
  );
}

export default TeamMember;

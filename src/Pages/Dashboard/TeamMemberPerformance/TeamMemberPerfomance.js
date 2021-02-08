import React from "react";
import "./TeamMemberPerfomance.css";
import TeamMember from "./TeamMember/TeamMember";
import data from "../../../assets/data";
function TeamMemberPerfomance() {
  let top4 = data
    .sort(function (a, b) {
      return a.rating < b.rating ? 1 : -1;
    })
    .slice(0, 4);
  return (
    <div className="member_perfomance">
      {top4.map((member) => {
        return <TeamMember data={member} />;
      })}
    </div>
  );
}

export default TeamMemberPerfomance;

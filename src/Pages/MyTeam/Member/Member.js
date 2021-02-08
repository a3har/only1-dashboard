import React from "react";
import "./Member.css";
function Member({ data }) {
  return (
    <div class="member">
      <div className="member__top">
        <div className="member__image">
          <img src={data.img} alt="" className="object-cover h-28 w-24" />
        </div>
        <div className="member__name">{data.name}</div>
        <div className="member__email">{data.email}</div>
      </div>

      <div className="member__designation">{data.designation}</div>
    </div>
  );
}

export default Member;

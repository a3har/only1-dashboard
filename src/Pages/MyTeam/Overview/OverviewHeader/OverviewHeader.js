import React from "react";
import "./OverviewHeader.css";
function OverviewHeader({ data, Logo }) {
  return (
    <div className="overviewheader">
      <Logo id="overviewheader__logo" />
      <span id="overviewheader__name">{data.name}</span>
      <span id="overviewheader__description">{data.description}</span>
      <span id="overviewheader__email">{data.email}</span>
    </div>
  );
}

export default OverviewHeader;

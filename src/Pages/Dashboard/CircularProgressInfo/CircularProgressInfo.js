import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./CircularProgressInfo.css";
function CircularProgressInfo({ data }) {
  let color = "";
  if (data.percentage <= 25) color = "#FF6D39";
  else if (data.percentage <= 50) color = "#FFD339";
  else color = "#3954FF";
  return (
    <div className="progress_info">
      <div className="progress_info__progressbar">
        <CircularProgressbar
          value={data.percentage}
          text={`${data.percentage}%`}
          strokeWidth={5}
          styles={buildStyles({
            textColor: color,
            pathColor: color,
            trailColor: "rgba(31, 33, 39, 0.06)",
          })}
          counterClockwise
          className=""
        />
      </div>
      <div className="progress_info__data">
        <div className="progress_info__quantity">{data.quantity}</div>
        <div className="progress_info__description">{data.description}</div>
      </div>
    </div>
  );
}

export default CircularProgressInfo;

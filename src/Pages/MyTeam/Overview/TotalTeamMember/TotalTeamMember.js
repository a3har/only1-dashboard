import React from "react";
import "./TotalTeamMember.css";
import { Pie } from "react-chartjs-2";
function TotalTeamMember({ data }) {
  return (
    <div className="totalteam">
      <div className="totalteam__header">Total Team Members</div>
      <div className="totalteam__info">
        <div className="totalteam__number">{data.totalCount}</div>
        <div className="totalteam__chart">
          <Pie
            data={{
              labels: ["Female", "Male"],
              datasets: [
                {
                  backgroundColor: ["#3954FF", "#FFD339"],
                  data: [data.female, data.male],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              legend: {
                display: false,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TotalTeamMember;

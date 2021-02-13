import React from "react";
import { Line } from "react-chartjs-2";
import "./TeamActivities.css";

function newDate(months) {
  let date = new Date();
  return new Date(date.setMonth(date.getMonth() + months));
}
function TeamActivities() {
  return (
    <div className="task_activities">
      <Line
        height={"300px"}
        data={{
          labels: [
            newDate(-4),
            newDate(-3),
            newDate(2),
            newDate(3),
            newDate(4),
            newDate(5),
            newDate(6),
          ],
          datasets: [
            {
              data: [100, 110, 130, 110, 70, 105],
              backgroundColor: "transparent",
              borderColor: "#3954FF",
              barThickness: 6,
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                type: "time",
                time: {
                  displayFormats: {
                    millisecond: "MMM",
                    second: "MMM",
                    minute: "MMM",
                    hour: "MMM",
                    day: "MMM",
                    week: "MMM",
                    month: "MMM",
                    quarter: "MMM",
                    year: "MMM",
                  },
                  unit: "month",
                },
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                  display: false,
                  drawBorder: false,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  drawBorder: false,
                },
                ticks: {
                  display: false,
                  beginAtZero: true,
                  stepSize: 25,
                },
              },
            ],
          },
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
}

export default TeamActivities;

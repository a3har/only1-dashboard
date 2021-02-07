import React from "react";
import { Bar } from "react-chartjs-2";
import "./TaskActivities.css";
function TaskActivities() {
  return (
    <div className="task_activities">
      <Bar
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Recieved",
              data: [100, 110, 130, 110, 70, 105],
              backgroundColor: "#3954FF",
              barThickness: 6,
            },
            {
              label: "Completed",
              data: [50, 90, 105, 100, 40, 90],
              backgroundColor: "#FFD339",
              barThickness: 6,
            },
          ],
        }}
        options={{
          maintainAspectRatio: true,
          barValueSpacing: 2,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  stepSize: 25,
                },
                barPercentage: 0.2,
              },
            ],
            xAxes: [
              {
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                },
                ticks: {
                  display: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default TaskActivities;

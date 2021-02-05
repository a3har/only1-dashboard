import React from "react";
import "./Dashboard.css";
import Card from "../../components/Card/Card";
function Dashboard() {
  let smallCardStyle = {
    height: "10rem",
    width: "15rem",
  };
  let taskActivitiesCardStyle = {
    height: "10rem",
    width: "30rem",
  };
  return (
    <div className="dashboard">
      <div className="dashboard__firstrow">
        <div className="dashboard__smallcards">
          <Card styles={smallCardStyle} />
          <Card styles={smallCardStyle} />
          <Card styles={smallCardStyle} />
          <Card styles={smallCardStyle} />
        </div>
        <div className="dashboard__taskactivities">
          <Card styles={taskActivitiesCardStyle} />
        </div>
      </div>
      <div className="dashboard__secondrow"></div>
    </div>
  );
}

export default Dashboard;

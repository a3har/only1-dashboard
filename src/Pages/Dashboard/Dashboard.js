import React from "react";
import "./Dashboard.css";
import Card from "../../components/Card/Card";
import CircularProgressInfo from "./CircularProgressInfo/CircularProgressInfo";
import TaskActivities from "./TaskActivities/TaskActivities";
import TeamActivities from "./Team Activities/TeamActivities";

let styles = {
  spanColsThree: { style: "md:col-span-3" },
  spanColsFive: { style: "md:col-span-5 row-span-2" },
  spanColsSix: { style: "md:col-span-6 row-span-2" },
  spanColsSeven: { style: "md:col-span-7 row-span-2" },
};
function Dashboard() {
  return (
    <div className="dashboard">
      <Card
        title="Works"
        style={styles.spanColsThree}
        cardData={{ percentage: 50, quantity: 75, description: "Works Today" }}
        Component={CircularProgressInfo}
      />
      <Card
        title="Analytics"
        style={styles.spanColsThree}
        cardData={{
          percentage: 25,
          quantity: 310,
          description: "Analytics Today",
        }}
        Component={CircularProgressInfo}
      />
      <Card
        title="Task Activities"
        style={styles.spanColsSix}
        cardData={{ percentage: 66 }}
        Component={TaskActivities}
      />
      <Card
        title="Statistics"
        style={styles.spanColsThree}
        cardData={{
          percentage: 59,
          quantity: 75,
          description: "Statistics Today",
        }}
        Component={CircularProgressInfo}
      />
      <Card
        title="Tasks"
        style={styles.spanColsThree}
        cardData={{ percentage: 75, quantity: 15, description: "Tasks Today" }}
        Component={CircularProgressInfo}
      />
      <Card
        title="Team Acitivities"
        style={styles.spanColsSeven}
        cardData={{ percentage: 66 }}
        Component={TeamActivities}
      />
      <Card
        title="Team Member Perfomance"
        style={styles.spanColsFive}
        cardData={{ percentage: 66 }}
        Component={CircularProgressInfo}
      />
    </div>
  );
}

export default Dashboard;

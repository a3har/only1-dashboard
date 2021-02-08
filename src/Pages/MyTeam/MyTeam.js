import React from "react";
import "./MyTeam.css";
import Overview from "./Overview/Overview";
import CardFirm from "../../components/CardFirm/CardFirm";
import Member from "./Member/Member";
import data from "../../assets/data";
let styles = {
  spanColsOne: { style: "md:col-span-1" },
  spanColsThree: { style: "md:col-span-3" },
  spanColsFive: { style: "md:col-span-5 row-span-2" },
  spanColsSix: { style: "md:col-span-6 row-span-2" },
  spanColsSeven: { style: "md:col-span-7 row-span-2" },
};
function MyTeam() {
  return (
    <div className="myteam">
      <div className="myteam__members">
        <div className="myteam__header">Team Members</div>
        <div className="myteam__allmembers">
          {data.map((member) => (
            <CardFirm
              Component={Member}
              style={styles.spanColsOne}
              cardData={member}
            />
          ))}
        </div>
      </div>
      <div className="myteam__overview">
        <CardFirm
          Component={Overview}
          style={styles.spanColsThree}
          displayHeader={false}
          // scaleOnHover={false}
        />
      </div>
    </div>
  );
}

export default MyTeam;

import React from "react";
import "./Overview.css";
import OverviewHeader from "./OverviewHeader/OverviewHeader";
import Logo from "../../../iconComponents/NextUxuiLogo";
import CardFirm from "../../../components/CardFirm/CardFirm";
import TeamLeader from "./TeamLeader/TeamLeader";
import TotalTeamMember from "./TotalTeamMember/TotalTeamMember";
function Overview() {
  return (
    <div className="overview">
      <div className="overview__header">
        <OverviewHeader
          data={{
            name: "Nxt_UXUI",
            description: "A designer team",
            email: "nxt.uxui@gmail.com",
          }}
          Logo={Logo}
        />
      </div>
      <div className="overview__contents">
        {/* Project Activity */}
        <CardFirm
          Component={TeamLeader}
          cardData={{
            name: "Alina Endorson",
            designation: "CEO and Team Leader",
            img:
              "https://media.istockphoto.com/photos/portrait-of-smiling-handsome-man-in-blue-tshirt-standing-with-crossed-picture-id1045886560?k=6&m=1045886560&s=612x612&w=0&h=hXrxai1QKrfdqWdORI4TZ-M0ceCVakt4o6532vHaS3I=",
          }}
          style={{ style: "col-span-1" }}
          displayHeader={false}
          scaleOnHover={false}
        />
        <CardFirm
          title={"Hi"}
          Component={TotalTeamMember}
          style={{ style: "col-span-1" }}
          displayHeader={false}
          scaleOnHover={false}
          cardData={{
            totalCount: 25,
            male: 17,
            female: 8,
          }}
        />
      </div>
    </div>
  );
}

export default Overview;

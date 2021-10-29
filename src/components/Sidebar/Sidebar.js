import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption/SidebarOption";
import SvgLogo from "../../iconComponents/Logo";
import SvgDashboard from "../../iconComponents/Dashboard";
import SvgMyTeam from "../../iconComponents/MyTeam";
import SvgTask from "../../iconComponents/Task";
import SvgCalender from "../../iconComponents//Calendar";
import SvgReport from "../../iconComponents/Report";
import SvgSettings from "../../iconComponents/Settings";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <SvgLogo className="sidebar__logo" />
        <span>ONLY1</span>
      </div>
      <div className="sidebar__options">
        <SidebarOption Icon={SvgDashboard} title="Dashboard" route="/" />
        <SidebarOption Icon={SvgMyTeam} title="My Team" route="/team" />
        <SidebarOption Icon={SvgTask} title="Task" route="/task" />
        <SidebarOption Icon={SvgCalender} title="Calendar" route="/calendar" />
        <SidebarOption Icon={SvgReport} title="Report" route="/report" />
        <SidebarOption Icon={SvgSettings} title="Settings" route="/settings" />
      </div>
    </div>
  );
}

export default Sidebar;

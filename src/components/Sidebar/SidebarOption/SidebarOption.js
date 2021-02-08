import React from "react";
import "./SidebarOption.css";
import { Link } from "react-router-dom";
function SidebarOption({ Icon, title, route = "/" }) {
  return (
    <Link to={route}>
      <div className="sidebarOption">
        {Icon && <Icon className="sidebarOption__icon" />}
        <h3>{title}</h3>
      </div>
    </Link>
  );
}

export default SidebarOption;

import React from "react";
import "./SidebarOption.css";
import { NavLink, useLocation } from "react-router-dom";
function SidebarOption({ Icon, title, route = "/" }) {
  const location = useLocation();

  return (
    <NavLink to={route}>
      <div
        className={`sidebarOption ${
          location.pathname === route ? "sidebarOption--active" : ""
        }`}
      >
        {Icon && <Icon className="sidebarOption__icon" />}
        <h3>{title}</h3>
      </div>
    </NavLink>
  );
}

export default SidebarOption;

import React from "react";
import "./Header.css";
import SvgAlarm from "../../iconComponents/Alarm";
import SvgAvatar from "../../iconComponents/Avatar";
import SvgSearch from "../../iconComponents/Search";
import { useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  let title = location.pathname === "/team" ? "My Team" : "Dashboard";
  return (
    <div className="header">
      <div className="header__left">{title}</div>
      <div className="header__right">
        <SvgSearch />
        <SvgAlarm />
        <SvgAvatar fontSize={"150%"} />
      </div>
    </div>
  );
}

export default Header;

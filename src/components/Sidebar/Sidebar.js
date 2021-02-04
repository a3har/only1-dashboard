import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption/SidebarOption'
import SvgLogo from '../../iconComponents/Logo'
import SvgDashboard from '../../iconComponents/Dashboard'
import SvgMyTeam from '../../iconComponents/MyTeam'
import SvgTask from '../../iconComponents/Task'
import SvgCalender from '../../iconComponents//Calendar'
import SvgReport from '../../iconComponents/Report'
import SvgSettings from '../../iconComponents/Settings'
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <SvgLogo className="sidebar__logo"/>
                <span>ONLY1</span>
            </div>
            <div className="sidebar__options">
                <SidebarOption Icon={SvgDashboard} title="Dashboard"/>
                <SidebarOption Icon={SvgMyTeam} title="My Team"/>
                <SidebarOption Icon={SvgTask} title="Task"/>
                <SidebarOption Icon={SvgCalender} title="Calender"/>
                <SidebarOption Icon={SvgReport} title="Report"/>
                <SidebarOption Icon={SvgSettings} title="Settings"/>
            </div>
            

        </div>
    )
}

export default Sidebar

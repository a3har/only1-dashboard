import React from 'react'
import "./Header.css"
import SvgAlarm from '../../iconComponents/Alarm'
import SvgAvatar from '../../iconComponents/Avatar'
import SvgSearch from '../../iconComponents/Search'
function Header() {
    return (
        <div className="header">
            <div className="header__left">
                Dashboard 
            </div>
            <div className="header__right">
                <SvgSearch />
                <SvgAlarm />
                <SvgAvatar fontSize={"150%"}/>
            </div>
        </div>
    )
}

export default Header

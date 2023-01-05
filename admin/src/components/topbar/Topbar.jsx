import React from 'react';
import "./topbar.css";
import { Language, NotificationsNone, Settings } from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">E-Shopz</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language />
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings />
                </div>
                <img src="data:image/jpeg;base64,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" alt="profile_pic" className="topAvatar"/>
            </div>
        </div>
    </div>
  )
}

export default Topbar;
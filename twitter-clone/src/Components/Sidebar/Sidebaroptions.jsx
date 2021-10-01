import React from 'react';
import "./Sidebar.css";

export const Sidebaroptions = ({text,Icon,active,value}) => {
    return (
        <div className={`sidebarOptions ${(active && value===1) &&  'sidebarOptions--active'} ${(active && value===0) &&  'twitterIcon--active'}  `} >
            <Icon/>
            <h2>{text}</h2>
        </div>
    )
}

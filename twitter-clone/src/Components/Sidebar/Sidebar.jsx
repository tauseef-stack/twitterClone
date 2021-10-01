import React from 'react'
import { Sidebaroptions } from './Sidebaroptions'
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import "./Sidebar.css";
const leftIcons = [{Icon:TwitterIcon,label:""},{Icon:HomeIcon,label:"Home"},{Icon:SearchIcon,label:"Explore"},{Icon:NotificationsNoneIcon,label:"Notification"},{Icon:MailOutlineIcon,label:"Message"},{Icon:BookmarkBorderIcon,label:"Bookmarks"},{Icon:ListAltIcon,label:"Lists"},{Icon:PermIdentityIcon,label:"Profile"},{Icon:MoreHorizIcon,label:"More"},]


export const Sidebar = () => {
    return (
        <div className="sidebar">
            {leftIcons.map((item, i) => {
                return (
                    <Sidebaroptions key={i} value={i} active={(i===1 || i===0) && true} Icon={item.Icon} text={item.label}/>
                )
            })}

            <Button variant="outlined" className="sidebarTweetbutton" fullWidth>Tweet</Button>
            
        </div>
    )
}

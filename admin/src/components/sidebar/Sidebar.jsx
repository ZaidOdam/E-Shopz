import {AttachMoney, BarChart, ChatBubbleOutline, Feedback, Home, MailOutline, Person, Report, Storefront, Timeline, TrendingUp, WorkOutline} from '@mui/icons-material';
import "./sidebar.css";

export default function Sidebar() {
  return (
    
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
            
                <ul className="sidebarList">
                    <a href="/">
                        <li className="sidebarListItem active">
                            <Home className="sidebarIcon" />
                            Home
                        </li>
                    </a>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>
                <li className="sidebarListItem">
                    <TrendingUp className="sidebarIcon"/>
                    Sales
                </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                
                <ul className="sidebarList">  
                    <a href="/users"> 
                        <li className="sidebarListItem">
                            <Person className="sidebarIcon" />
                            Users
                        </li>
                    </a> 
                    <a href="/products">
                        <li className="sidebarListItem">
                            <Storefront className="sidebarIcon"/>
                            Products
                        </li>
                    </a>
                    <li className="sidebarListItem">
                        <AttachMoney className="sidebarIcon"/>
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <BarChart className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>  
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
            
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MailOutline className="sidebarIcon" />
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <Feedback className="sidebarIcon"/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutline className="sidebarIcon"/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
            
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <Report className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
  )
}

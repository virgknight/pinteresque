import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SmsIcon from '@mui/icons-material/Sms';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

class NavBarLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchQuery: ""};
    }

    render () {
        const { currentUser, logout } = this.props;

        const loggedInLinks = () => (
            <nav id="header-nav" className="header-elements">
                <div className="searchbar">
                    <SearchIcon sx={{ color: "gray"}}/>
                    <input className="search-input" type="text" placeholder="Search"/>
                </div>
                <div className="notification-bell nav-icon"><NotificationsIcon sx={{ fontSize: 30, color: "gray" }}/></div>
                <div className="inbox-icon nav-icon"><SmsIcon sx={{ fontSize: 30, color: "gray" }} /></div>
                <div className="profile-icon nav-icon">{currentUser ? currentUser.username[0].toUpperCase() : ""}</div>
                <div className="menu-icon nav-icon"><KeyboardArrowDownIcon sx={{ fontSize: 30, color: "gray" }} /></div>
            </nav>
        );

        const loggedOutLinks = () => (
            <nav id="header-nav" className="header-elements">
                <div className="professional-links">
                    <a href="https://github.com/virgknight/pinteresque">GitHub</a>
                    <a href="https://www.linkedin.com/in/virginia-knight-2a75aaa6/">LinkedIn</a>
                </div>
                <button className="red"><Link to="/login">Log in</Link></button>
                <button><Link to="/signup">Sign up</Link></button>
            </nav>
        );

        return (<header id="header">
            <div className="header-elements"> 
                <img src={window.round_logo} width="50" height="50" />
                {currentUser ? <h1 className="header-text">Home</h1> : <h1 className="header-text red">Pinteresque</h1>}
            </div>

            {currentUser ? loggedInLinks() : loggedOutLinks()}
        </header>);
    }
}

export default NavBarLinks;
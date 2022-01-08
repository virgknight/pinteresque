import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SmsIcon from '@mui/icons-material/Sms';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuDropdown from "./menu_dropdown";

class NavBarLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchQuery: ""};

        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown() {
        let dropdown = document.getElementById("menu-dropdown");
        dropdown.classList.toggle("show");
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
                <div className="profile-icon nav-icon">
                    <Link to={`/users/${currentUser.id}/_saved`}>
                        <svg height="20" width="20">
                            <circle cx="10" cy="10" r="8" fill="#efefef" />
                            <text x="33%" y="50%" textAnchor="middle" fill="#111" fontSize="12px">{currentUser.display_name[0].toUpperCase()}</text>
                        </svg>
                    </Link>
                </div>
                <div className="menu-icon nav-icon" onClick={this.toggleDropdown}>
                    <KeyboardArrowDownIcon sx={{ fontSize: 30, color: "gray" }} />
                    <MenuDropdown logout={logout} currentUser={currentUser} />
                </div>
            </nav>
        );

        const loggedOutLinks = (
            <nav id="header-nav" className="header-elements">
                <div className="professional-links">
                    <a href="https://github.com/virgknight/pinteresque">GitHub</a>
                    <a href="https://www.linkedin.com/in/virginia-knight-2a75aaa6/">LinkedIn</a>
                </div>
                <button className="red styled-button"><Link to="/login">Log in</Link></button>
                <button className="styled-button"><Link to="/signup">Sign up</Link></button>
            </nav>
        );

        return (<header id="main-header">
            <div className="header-elements"> 
                <img src={window.round_logo} width="50" height="50" />
                {currentUser ? 
                    <><h1 className="header-text white"><Link to="/">Home</Link></h1> 
                    <h1 className="header-text">Today</h1></>
                    : 
                    <h1 className="header-text red">Pinteresque</h1>}
            </div>

            {currentUser ? loggedInLinks() : loggedOutLinks }
        </header>);
    }
}

export default NavBarLinks;
import React from "react";
import { Link } from "react-router-dom";

const MenuDropdown = ({ currentUser, logout }) => {
    return (
        <div id="menu-dropdown" className="dropdown-content">
            <h6>Currently in</h6>
            <Link to={`/users/${currentUser.id}/_saved`}>
                <div className="profile-summary">
                    <svg height="80" width="80">
                        <circle cx="40" cy="40" r="30" fill="#efefef" />
                        <text x="50%" y="67%" textAnchor="middle" fill="#111" fontSize="40px">{currentUser.display_name[0].toUpperCase()}</text>
                    </svg>
                    <div className="profile-summary-names">
                        <h2>{currentUser.display_name}</h2>
                        <p>{currentUser.email}</p>
                    </div>
                </div>
            </Link>
            <br />
            <h6>More options</h6>
            <Link to="/settings/edit-profile">Settings</Link>
            <h3 onClick={logout}>Log out</h3>
        </div>
    );
}

export default MenuDropdown; 
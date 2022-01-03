import React from "react";
import { Link } from "react-router-dom";

const NavBarLinks = ({currentUser, logout }) => {
    const loggedInLinks = () => (
        <nav id="header-nav" className="header-elements">
            <button className="red" onClick={logout}>Log Out</button>
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
            <h1 className="header-text">Pinteresque</h1>
        </div>

        {currentUser ? loggedInLinks() : loggedOutLinks()}
    </header>);
};

export default NavBarLinks;
import React from "react";
import { NavLink } from "react-router-dom";

const UserSettingsNav = () => {
    return (
        <aside id="user-settings-nav">
            <NavLink to="/settings/edit-profile" activeClassName="underlined">Public profile</NavLink>
            <NavLink to="/settings/account-settings" activeClassName="underlined">Account settings</NavLink>
        </aside>
    );
};

export default UserSettingsNav;


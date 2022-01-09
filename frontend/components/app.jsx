import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBarLinksContainer from "./navbar/navbar_links_container";
import NotificationModal from "./home/notification_modal";

import homePageContainer from "./home/home_page_container";
import loginFormContainer from "./session/login_form_container";
import signupFormContainer from "./session/signup_form_container";

import pinShortcutButtonsContainer from "./pins/pin_shortcut_buttons_container";

import pinEditFormContainer from "./pins/pin_edit_form_container";
import pinShowContainer from "./pins/pin-show-container";
import newPinFormContainer from "./pins/new_pin_form_container";

import userShowContainer from "./users/user_show_container";
import userCreatedContainer from "./users/user_created_container";
import UserSettingsNav from "./users/user_settings_nav";
import editProfileContainer from "./users/edit_profile_form_container";
import accountSettingsFormContainer from "./users/account_settings_form_container";

import discoverFeedContainer from "./discover_feed/discover_feed_container";

const App = () => (
    <div>
        <NavBarLinksContainer />
        <NotificationModal />

        {/* logged out routes */}
        <Route path="/" component={homePageContainer} />
        <AuthRoute path="/login" component={loginFormContainer} />
        <AuthRoute path="/signup" component={signupFormContainer} />

        {/* logged in routes */}
        <Route path="/" component={pinShortcutButtonsContainer}/>

        {/* these are not included in switch, as pin/edit appears as a modal over the pin itself */}
        <ProtectedRoute path="/pins/:pinId/edit" component={pinEditFormContainer} />
        <ProtectedRoute path="/pins/:pinId" component={pinShowContainer} />
        <ProtectedRoute path="/pin-builder" component={newPinFormContainer} />

        <ProtectedRoute path="/users/:userId" component={userShowContainer} />
        <ProtectedRoute path="/users/:userId/_created" component={userCreatedContainer} />
        <ProtectedRoute path="/settings" component={UserSettingsNav} />
        <ProtectedRoute path="/settings/edit-profile" component={editProfileContainer} />
        <ProtectedRoute path="/settings/account-settings" component={accountSettingsFormContainer} />

        <Route exact path="/" component={discoverFeedContainer} /> 
    </div>
);

export default App;
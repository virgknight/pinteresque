import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBarLinksContainer from "./navbar/navbar_links_container";
import homePageContainer from "./home/home_page_container";
import loginFormContainer from "./session/login_form_container";
import signupFormContainer from "./session/signup_form_container";

import pinShortcutButtonsContainer from "./pins/pin_shortcut_buttons_container";
import pinEditFormContainer from "./pins/pin_edit_form_container";
import pinShowContainer from "./pins/pin-show-container";
import newPinFormContainer from "./pins/new_pin_form_container";
import discoverFeedContainer from "./discover_feed/discover_feed_container";

const App = () => (
    <div>
        <NavBarLinksContainer />

        {/* logged out routes */}
        <Route path="/" component={homePageContainer} />
        <AuthRoute path="/login" component={loginFormContainer} />
        <AuthRoute path="/signup" component={signupFormContainer} />

        {/* logged in routes */}
        <Route path="/" component={pinShortcutButtonsContainer}/>

        {/* these are not included in switch, as pin/edit appears as a modal over the pin itself */}
        <ProtectedRoute path="/pins/:pinId/edit" component={pinEditFormContainer} />
        <ProtectedRoute path="/pins/:pinId" component={pinShowContainer} />
        
        <Switch>
            <ProtectedRoute path="/pin-builder" component={newPinFormContainer} />
            <Route exact path="/" component={discoverFeedContainer} /> 
        </Switch>
    </div>
);

export default App;
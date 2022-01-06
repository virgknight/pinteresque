import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBarLinksContainer from "./navbar/navbar_links_container";
import loginFormContainer from "./session/login_form_container";
import signupFormContainer from "./session/signup_form_container";
import homePageContainer from "./home/home_page_container";
import discoverFeedContainer from "./discover_feed/discover_feed_container";
import pinShowContainer from "./pins/pin-show-container";

const App = () => (
    <div>
        <NavBarLinksContainer />

        {/* logged out routes */}
        <Route path="/" component={homePageContainer} />
        <AuthRoute path="/login" component={loginFormContainer} />
        <AuthRoute path="/signup" component={signupFormContainer} />

        {/* logged in routes */}
        {/* How can I have the below NOT reshuffle/rerender when a user hits the backspace to return to it? */}
        <Route exact path="/" component={discoverFeedContainer} /> 
        <Route path="/pins/:pinId" component={pinShowContainer} />

    </div>
);

export default App;
import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBarLinksContainer from "./navbar/navbar_links_container";
import loginFormContainer from "./session/login_form_container";
import signupFormContainer from "./session/signup_form_container";
import homePageContainer from "./home/home_page_container";

const App = () => (
    <div>
        <NavBarLinksContainer />
        <Route exact path="/" component={homePageContainer} />
        
        <AuthRoute path="/login" component={loginFormContainer} />
        <AuthRoute path="/signup" component={signupFormContainer} />

    </div>
);

export default App;
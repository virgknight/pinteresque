import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import NavBarLinksContainer from "./navbar/navbar_links_container";
import loginFormContainer from "./session/login_form_container";
import signupFormContainer from "./session/signup_form_container";
import SplashContainer from "./splash/splash_container";

const tempComponent = () => {
    return (<p>You're logged in!</p>);
};

const App = () => (
    <div>
        <NavBarLinksContainer />
        <SplashContainer />
        
        <AuthRoute path="/login" component={loginFormContainer} />
        <AuthRoute path="/signup" component={signupFormContainer} />

        <ProtectedRoute exact path="/" component={tempComponent} />
    </div>
);

export default App;
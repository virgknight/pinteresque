import React from "react";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import loginFormContainer from "./session/login_form_container";

const tempComponent = () => {
    return (<p>You're logged in!</p>);
};

const App = () => (
    <div>
        <h1 className="header-text">Pinteresque</h1>

        
        <Route path="/login" component={loginFormContainer} />

        <AuthRoute exact path="/" component={tempComponent} />
    </div>
);

export default App;
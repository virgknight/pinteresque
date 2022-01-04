import React from "react";
import SplashContainer from "./splash_container";

const HomePage = ({currentUser}) => {
    return (currentUser ? 
        null
        :
        <SplashContainer />
        );
}

export default HomePage;
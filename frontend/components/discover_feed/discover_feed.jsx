import React from "react";
import DiscoverGridContainer from "./discover_grid_container";

const DiscoverFeed = ({ currentUser }) => {
    return (currentUser ?
        <DiscoverGridContainer />
        :
        null
    );
}

export default DiscoverFeed;
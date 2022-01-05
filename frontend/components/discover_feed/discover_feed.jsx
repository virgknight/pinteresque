import React from "react";
import DiscoverGridContainer from "./discover_grid_container";
import { shufflePinObject } from "../../util/pin_util";

class DiscoverFeed extends React.Component {
    componentDidMount () {
        this.props.requestAllPins();
    }

    render () {
        const { currentUser, pins } = this.props;

        const shuffledPins = shufflePinObject(pins);
        const infinite = true;

        return (currentUser ?
            <DiscoverGridContainer pins={shuffledPins} infinite={infinite} />
            :
            null
        );
    }
}

export default DiscoverFeed;
import React from "react";
import DiscoverGridContainer from "../discover_feed/discover_grid_container";

class UserCreated extends React.Component {
    constructor(props) {
        super(props);
        this.mounted = false;
        this.infinite = false;
    }

    componentDidMount () {
        this.mounted = true;
        this.props.requestOtherUser(this.props.match.params.userId)
            .then((payload) => {
                this.props.requestUserPins(payload.user.id)
            });
    }

    render () {
        const usersPins = Object.values(this.props.pins).filter((pin) => pin.owner_id === this.props.user.id);

        return <DiscoverGridContainer pins={usersPins} infinite={this.infinite} />;
    }
}

export default UserCreated;
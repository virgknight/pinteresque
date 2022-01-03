import React from "react";

class Splash extends React.Component {
    constructor (props) {
        super(props);
        this.state = { currentTab: 0 };
    }

    render () {
        const splashy = (<main id="splash-content">
            <h1>Get your next</h1>
            <h1 className="splash-theme-title">weeknight dinner idea</h1>
        </main>);

        return this.props.currentUser ? null : splashy;
    }
}

export default Splash;
import React from "react";
import CircleIcon from '@mui/icons-material/Circle';

class Splash extends React.Component {
    constructor (props) {
        super(props);
        this.state = { currentTab: 0 };
        this.ideas = { 0: {text: "weeknight dinner idea", color: "cadetblue"}, 
            1: { text: "existential crisis", color: "goldenrod" }, 
            2: { text: "party decor idea", color: "lightcoral" } };
        this.interval = undefined;
    }

    componentDidMount () {
        let i = 0;
        this.interval = setInterval(() => {
            i ++;
            this.setState({currentTab: i % 3})
        }, 5000);
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    switchIdea (idxNum) {
        return (e) => this.setState({currentTab: idxNum});
    }

    render () {
        const selectedIdea = this.ideas[this.state.currentTab];
        const selectedClasses = selectedIdea.color + " sliding";

        const circleButtons = [0,1,2].map((circleNumber) => (
            <div onClick={this.switchIdea(circleNumber)}>
                <CircleIcon sx={{ fontSize: 10, color: (this.state.currentTab === circleNumber ? selectedIdea.color : "lightgray") }} />
            </div>
        ));

        const splashy = (<main id="splash-content">
            <h1>Get your next</h1>
            <h1 className={selectedClasses}>{selectedIdea.text}</h1>
            <div className="splash-theme-buttons">
                {circleButtons}
            </div>
        </main>);

        return this.props.currentUser ? null : splashy;
    }
}

export default Splash;
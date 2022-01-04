import React from "react";
import CircleIcon from '@mui/icons-material/Circle';
import SplashImages0 from "./spash_images_0";

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
            i = this.state.currentTab + 1;
            this.setState({currentTab: (i % 3)})
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

        const circleButtons = [0, 1, 2].map((circleNum) => (
            <div key={`circleicon-${circleNum}`} onClick={this.switchIdea(circleNum)}>
                <CircleIcon sx={{ fontSize: 10, color: (this.state.currentTab === circleNum ? selectedIdea.color : "lightgray") }} />
            </div>
        ));

        return (<main id="splash-content">
            <h1>Get your next</h1>
            <h1 className={selectedClasses}>{selectedIdea.text}</h1>
            <div className="splash-theme-buttons">
                {circleButtons}
            </div>
            <SplashImages0 />
        </main>);
    }
}

export default Splash;
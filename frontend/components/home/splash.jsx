import React from "react";
import CircleIcon from '@mui/icons-material/Circle';
import SplashImages0 from "./spash_images_0";
import SplashImages1 from "./splash_images_1";
import SplashImages2 from "./splash_images_2";

const SelectedIdeaText = ({text, color}) => (
    <h1 className={`${color} sliding`}>{text}</h1>
);

class Splash extends React.Component {
    constructor (props) {
        super(props);
        this.state = { currentTab: 0 };
        this.ideas = { };
        this.interval = undefined;

        // booleans to assist render
        this.initialRender = true;
        this.noIdeas = true;
    }

    componentDidMount () {
        this.props.requestAllPins();

        let i = 0;
        this.interval = setInterval(() => {
            i = this.state.currentTab + 1;
            this.setState({currentTab: (i % 3)})
        }, 5000);
    }

    // Function to create the ideas object
    // this cannot be done in constructor or componentDidMount as this.props.pins will not be populated yet
    setIdeas () {
        this.ideas = {
            0:
            {
                text: <SelectedIdeaText text="weeknight dinner idea" color="cadetblue" />,
                images: <SplashImages0 pins={this.props.pins} />,
                color: "cadetblue"
            },
            1:
            {
                text: <SelectedIdeaText text="existential crisis" color="goldenrod" />,
                images: <SplashImages1 pins={this.props.pins} />,
                color: "goldenrod"
            },
            2:
            {
                text: <SelectedIdeaText text="party decor idea" color="lightcoral" />,
                images: <SplashImages2 pins={this.props.pins} />,
                color: "lightcoral"
            }
        };
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    switchIdea (idxNum) {
        return (e) => this.setState({currentTab: idxNum});
    }

    render () {
        // return null on first render
        if (this.initialRender) {
            this.initialRender = false;
            return null;
        }

        // set up ideas object if not done so already
        if (this.noIdeas) {
            this.noIdeas = false;
            this.setIdeas();
        }

        // determine which idea is currently being displayed
        const selectedIdea = this.ideas[this.state.currentTab];

        const circleButtons = [0, 1, 2].map((circleNum) => (
            <div key={`circleicon-${circleNum}`} onClick={this.switchIdea(circleNum)}>
                <CircleIcon sx={{ fontSize: 10, color: (this.state.currentTab === circleNum ? selectedIdea.color : "lightgray") }} />
            </div>
        ));

        return (<main id="splash-content">
            <h1>Get your next</h1>
            {selectedIdea.text}
            <div className="splash-theme-buttons">
                {circleButtons}
            </div>

            {selectedIdea.images}
        </main>);
    }
}

export default Splash;
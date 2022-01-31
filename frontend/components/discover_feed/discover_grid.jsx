import React from "react";
import GridIndexItem from "./grid_index_item";

class DiscoverGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayedPins: [],
            numImagesDisplayed: 0,
            allImagesShown: false // only toggled when props.infinite = false (aka for non-infinite scrolling boards)
        };

        this.initialDisplayIncomplete = true;

        this.handleScroll = this.handleScroll.bind(this);
        this.getNumOfImagesToAdd = this.getNumOfImagesToAdd.bind(this);
    }

    componentDidUpdate () {
        if (this.initialDisplayIncomplete) {
            this.createInitialDisplay();
            this.initialDisplayIncomplete = false;
        }
    }

    componentWillUnmount () {
        // Somehow this magically gets rid of the weird unmounted component error
        // s/o StackOverflow
        this.setState = () => { return; };
    }

    createInitialDisplay() {
        const numInitialImages = this.getNumOfImagesToAdd();

        // add scroll listener
        window.addEventListener("scroll", this.handleScroll);

        // set state to reflect displayed images
        const initialImages = this.props.pins.slice(0, numInitialImages);
        this.setState({
            numImagesDisplayed: numInitialImages,
            displayedPins: initialImages
        });
    }

    getNumOfImagesToAdd () {
        // default: add 15 images
        let numImages = 15;

        // for non-infinite scrolling boards, check that this doesn't put us over the number of available images
        if (!this.props.infinite && 
                this.props.pins.length <= this.state.numImagesDisplayed + numImages) {
            numImages = this.props.pins.length - this.state.numImagesDisplayed;
            this.setState({ allImagesShown: true });
        }
        return numImages;
    }

    handleScroll () {
        // grab document element
        const doc = document.documentElement;
        // calculate total scrollable length minus length already scrolled past
        const scrollPos = doc.scrollHeight - doc.scrollTop;
        // if scrollPos is equal to window width (aka we've scrolled to the bottom of the viewable content),
        // and there are more images to show, then add them
        if (!this.state.allImagesShown && scrollPos === doc.clientHeight) this.addImages();
    }

    addImages () {
        const numNewImages = this.getNumOfImagesToAdd();

        const {pins} = this.props;
        const {numImagesDisplayed} = this.state;
        const startIndex = numImagesDisplayed % pins.length;

        let newPins;
        // conditional structure accounts for infinite scroll
        // once we've already shown all the pins, just repeat them again
        if (startIndex + numNewImages > pins.length) {
            const pinsFromEnd = pins.slice(startIndex);
            const pinsFromStart = pins.slice(0, numNewImages - (pins.length - startIndex));
            newPins = [...pinsFromEnd, ...pinsFromStart];
        } else {
            newPins = pins.slice(startIndex, startIndex + numNewImages);
        }

        this.setState({
            displayedPins: [...this.state.displayedPins, ...newPins],
            numImagesDisplayed: (numImagesDisplayed + numNewImages)
        });
    }

    render () {
        if (this.props.pins.length === 0) return (<h1 className="header-text" style={{textAlign: "center", fontWeight: "lighter"}}>There aren't any Pins yet</h1>);

        // Update so that all pins are shown for non-infinite displays. Otherwise deleted pins will not get removed dynamically
        let allPins = this.props.infinite ? this.state.displayedPins : this.props.pins ;

        return (
            <main className="pin-index">
                {[0,1,2,3,4].map((i) => (
                    <div key={`col-${i}`} className={`gridcol col${i}`}>
                        {allPins
                            .filter((pin, j) => (j % 5 === i))
                            .map((pin, j) => (
                                <GridIndexItem key={`img-${j}`} pin={pin} history={this.props.history}/>
                            ))}
                    </div>
                ))}
            </main>
        );
    }
}

export default DiscoverGrid;
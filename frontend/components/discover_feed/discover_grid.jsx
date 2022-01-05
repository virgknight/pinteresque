import React from "react";

class DiscoverGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayedPins: [],
            numImagesDisplayed: 0,
            allImagesShown: false // relevant to boards only infinite scroll will not toggle this)
        };

        this.initialDisplayIncomplete = true;

        this.handleScroll = this.handleScroll.bind(this);
        this.getNumOfImagesToAdd = this.getNumOfImagesToAdd.bind(this);
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
        // default: add 10 images (increase?)
        let numImages = 10;

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
        if (this.props.pins.length === 0) return null;

        if (this.initialDisplayIncomplete) {
            this.createInitialDisplay();
            this.initialDisplayIncomplete = false;
        }

        return (
            <main className="pin-index">
                {this.state.displayedPins.map((pin, i) => (
                    <img key={`img-${i}`} src={pin.photoUrl} />
                ))}
            </main>
        );
    }
}

export default DiscoverGrid;
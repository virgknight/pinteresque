import React from "react";

class DiscoverGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayedPins: [],
            numRowsDisplayed: 0,
            endOfPage: false
        };
    }

    render () {
        if (this.props.pins.length === 0) return null;

        return (
            <main className="pin-index">
                {this.map((pin, i) => (
                    <img key={`img-${i}`} src={pin.photoUrl} />
                ))}
            </main>
        );
    }
}

export default DiscoverGrid;
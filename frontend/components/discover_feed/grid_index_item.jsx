import React from "react";
import BoardSaveContainer from '../boards/board_save_container';

class GridIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push(`/pins/${this.props.pin.id}`)
    }

    render () {
        const {pin} = this.props;
        return (
            <div onClick={this.handleClick} className="pin-index-item">
                <BoardSaveContainer pinId={pin.id} indexView={true} />
                <img className="pin-index-img" key={`img-$`} src={pin.photoUrl} />
                <div className="pin-desc-text">
                    <h6 className="pin-name">{pin.title}</h6>
                    <p className="pin-alt">{pin.alt_text}</p>
                </div>
            </div>
        );
    }
}

export default GridIndexItem;
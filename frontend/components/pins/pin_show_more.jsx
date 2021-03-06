import React from "react";
import { Link } from "react-router-dom";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

class PinShowMore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {appear: false};

        this.reveal = this.reveal.bind(this);
        this.hide = this.hide.bind(this);
    }

    reveal () {
        this.setState({appear: true});
    }

    hide () {
        this.setState({appear: false});
    }

    render () {
        const {currentUser, pin} = this.props;

        const editOption = (currentUser.id === pin.owner_id) ? 
            (<li onClick={this.hide}><Link to={`/pins/${pin.id}/edit`}>Edit Pin</Link></li>) : 
                            null;

        return (
            <div>
                <div onClick={this.reveal}><MoreHorizIcon fontWeight="900" /></div>

                <div onClick={this.hide}
                    className={this.state.appear ? "ps-navbutton modal" : "hidden ps-navbutton modal"}>
                    <ul onClick={e => e.stopPropagation()}
                        className="ps-more shadowed">
                        <li><a href={pin.photoUrl} download>Download image</a></li>
                        {editOption}
                    </ul>
                </div>
            </div>
        );
    }
}

export default PinShowMore;
import React from "react";
import { Link } from "react-router-dom";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

class PinShowMore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {appear: false};

        this.whenFocusOrBlur = this.whenFocusOrBlur.bind(this);
    }

    whenFocusOrBlur () {
        this.setState({appear: !this.state.appear});
    }

    render () {
        const {currentUser, pin} = this.props;

        const editOption = (currentUser.id === pin.owner_id) ? 
                            (<li><Link to={`/pins/${pin.id}/edit`}>Edit Pin</Link></li>) : 
                            null;

        return (
            <div>
                <button className="ps-navbutton" onFocus={this.whenFocusOrBlur} onBlur={this.whenFocusOrBlur}>
                    <MoreHorizIcon fontWeight="900" />
                    <ul onClick={e => e.stopPropagation()} 
                        className={this.state.appear ? "ps-more shadowed" : "hidden ps-more shadowed"}>
                        {editOption}
                    </ul>
                </button>
            </div>
        );
    }
}

export default PinShowMore;
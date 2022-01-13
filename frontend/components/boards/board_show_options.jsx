import React from "react";
import { Link } from "react-router-dom";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

class BoardShowOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = { appear: false };

        this.reveal = this.reveal.bind(this);
        this.hide = this.hide.bind(this);
    }

    reveal() {
        this.setState({ appear: true });
    }

    hide() {
        this.setState({ appear: false });
    }

    render() {
        const { currentUser, board } = this.props;

        const editOption = (currentUser.id === board.owner_id) ?
            (<li onClick={this.hide}><Link to={`/boards/${board.id}/edit`}>Edit Board</Link></li>) :
            // VKNOTE: add follow button here when possible
            // Will need to include logic to check whether current user follows board's user already
            (<li onClick={this.hide}>Follow</li>);

        return (
            <div>
                <div onClick={this.reveal}><MoreHorizIcon sx={{ fontSize: 30 }} /></div>

                <div onClick={this.hide}
                    className={this.state.appear ? "ps-navbutton modal" : "hidden ps-navbutton modal"}>
                    <ul onClick={e => e.stopPropagation()}
                        className="ps-more shadowed" id="board-show-options">
                        <p>Board options</p>
                        {editOption}
                    </ul>
                </div>
            </div>
        );
    }
}

export default BoardShowOptions;
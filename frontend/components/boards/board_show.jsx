import React from "react";
import BoardShowOptions from "./board_show_options";
import DiscoverGridContainer from "../discover_feed/discover_grid_container";
import { Link } from "react-router-dom";

class BoardShow extends React.Component {
    constructor(props) {
        super(props);
        this.boardPins = [];
    }

    componentDidMount() {
        this.props.requestBoard(this.props.match.params.boardId)
            .then(({board}) => this.props.requestOtherUser(board.owner_id));
        this.props.requestBoardPins(this.props.match.params.boardId)
            .then(({ pins }) => this.boardPins = Object.values(pins).reverse())
    }

    render () {
        const { board, getUserIcon, currentUser } = this.props;

        if (!board) return null;

        const boardOwner = this.props.users[board.owner_id];
        
        return (<main>
            <div className="show-header">
                <div className="board-title-flex">
                    <h1>{board.name}</h1>
                    <BoardShowOptions currentUser={currentUser} board={board}/>
                </div>
                <Link to={`/users/${boardOwner.id}/_saved`}>{getUserIcon(boardOwner)}</Link>
                <h6>{boardOwner.display_name}</h6>
                {board.description ? <h5 className="board-desc">{board.description}</h5> : null}
                {/* VKNOTE: add follower count in here when possible */}
                <h6>X followers</h6>
                <br />
            </div>
            <DiscoverGridContainer pins={this.boardPins} infinite={false} />
        </main>);
    }
}

export default BoardShow;
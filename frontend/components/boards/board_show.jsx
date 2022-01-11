import React from "react";
import BoardShowOptions from "./board_show_options";
import DiscoverGridContainer from "../discover_feed/discover_grid_container";

class BoardShow extends React.Component {

    componentDidMount() {
        this.props.requestBoard(this.props.match.params.boardId)
            .then(({board}) => this.props.requestOtherUser(board.owner_id));
        this.props.requestBoardPins(this.props.match.params.boardId)
    }

    render () {
        const { board, getUserIcon, currentUser } = this.props;

        if (!board) return null;

        const boardOwner = this.props.users[board.owner_id];

        const boardPins = Object.values(this.props.pins); // reducer should enforce that state only contains board's pins
        boardPins.reverse(); // show most recent first
        
        return (<main>
            <div className="show-header">
                <div className="board-title-flex">
                    <h1>{board.name}</h1>
                    <BoardShowOptions currentUser={currentUser} board={board}/>
                </div>
                {getUserIcon(boardOwner)}
                <h6>{boardOwner.display_name}</h6>
                {board.description ? <h5 className="board-desc">{board.description}</h5> : null}
                {/* VKNOTE: add follower count in here when possible */}
                <h6>X followers</h6>
                <br />
            </div>
            <DiscoverGridContainer pins={boardPins} infinite={false} />
        </main>);
    }
}

export default BoardShow;
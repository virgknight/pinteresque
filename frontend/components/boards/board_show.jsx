import React from "react";
import BoardShowOptions from "./board_show_options";
import DiscoverGridContainer from "../discover_feed/discover_grid_container";
import { Link } from "react-router-dom";

class BoardShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { boardPins: [] }
        // this.boardPins = [];
    }

    componentDidMount() {
        this.props.requestBoard(this.props.match.params.boardId)
            .then(({board}) => {
                this.props.requestAllSaves();
                this.props.requestOtherUser(board.owner_id).then(() => {
                    this.props.requestBoardPins(this.props.match.params.boardId)
                        .then(({ pins }) => this.setState({boardPins: Object.values(pins).reverse()}));
                });
            });
    }

    render () {
        const { board, getUserIcon, currentUser, users, pins, boards_pins } = this.props;

        if (!board || Object.keys(boards_pins).length === 0) return null;

        const boardOwner = users[board.owner_id];
        if (!boardOwner) return null;

        const shownSaves = Object.values(boards_pins).filter((save) => save.board_id === board.id);
        if (shownSaves.length && Object.keys(pins).length === 0) return null;
        const shownPins = shownSaves.map((save) => pins[save.pin_id]);

        return (<main>
            <div className="show-header">
                <div className="board-title-flex">
                    <h1>{board.name}</h1>
                    <BoardShowOptions currentUser={currentUser} board={board}/>
                </div>
                <Link to={`/users/${board.owner_id}/_saved`}>{getUserIcon(boardOwner)}</Link>
                <h6>{boardOwner.display_name}</h6>
                {board.description ? <h5 className="board-desc">{board.description}</h5> : null}
                {/* VKNOTE: add follower count in here when possible */}
                {/* <h6>X followers</h6> */}
                <br />
            </div>
            <DiscoverGridContainer pins={shownPins} infinite={false} />
        </main>);
    }
}

export default BoardShow;
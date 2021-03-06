import React from "react";
import BoardIndexItem from "./board_index_item";

class BoardIndex extends React.Component {
    constructor(props) {
        super(props);
        this.visitBoard = this.visitBoard.bind(this);
    }

    componentDidMount() {
        this.props.requestOtherUser(this.props.match.params.userId)
            .then(({user}) => {
                this.props.requestUserBoards(user.id)
            });
    }

    visitBoard (boardId) {
        return () => this.props.history.push(`/boards/${boardId}`);
    }

    render () {
        const { currentUser, user, boards, boards_pins, pins } = this.props;

        if (!user) return null;

        // pull out user's boards
        const displayedBoards = Object.values(boards).filter((board) => board.owner_id === user.id).reverse();

        // boolean indicating whether the current user is viewing their own boards
        // used to decide whether to display edit shortcut button on hover
        const isCurrentUser = (currentUser.id === user.id);

        return (
            <div>
                { 
                displayedBoards.length > 0 ? 
                (<main className="pin-index">
                    {[0, 1, 2, 3, 4].map((i) => (
                        <div key={`col-${i}`} className={`gridcol col${i}`}>
                            {displayedBoards
                                .filter((board, j) => (j % 5 === i))
                                .map((board, j) => (
                                    <BoardIndexItem key={`board-${j}`} board={board} visitBoard={this.visitBoard}
                                        boards_pins={boards_pins} pins={pins} isCurrentUser={isCurrentUser}/>
                                ))}
                        </div>
                    ))}
                </main>) :
                (<h1 className="header-text" style={{ textAlign: "center", fontWeight: "lighter" }}>No boards yet</h1>)
                }
            </div>
        );
    }
}

export default BoardIndex;
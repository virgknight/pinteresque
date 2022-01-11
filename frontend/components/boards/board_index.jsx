import React from "react";
import BoardIndexItem from "./board_index_item";

class BoardIndex extends React.Component {
    componentDidMount() {
        this.props.requestOtherUser(this.props.match.params.userId)
            .then(({user}) => {
                this.props.requestUserBoards(user.id)
            });
    }

    render () {
        const { currentUser, user, boards, boards_pins, pins } = this.props;

        if (!user) return null;

        // pull out user's boards
        const displayedBoards = Object.values(boards).reverse();

        // boolean indicating whether the current user is viewing their own boards
        // used to decide whether to display edit button on hover
        const isCurrentUser = (currentUser.id === user.id);

        return (
            <div>
                <main className="pin-index">
                    {[0, 1, 2, 3, 4].map((i) => (
                        <div key={`col-${i}`} className={`gridcol col${i}`}>
                            {displayedBoards
                                .filter((board, j) => (j % 5 === i))
                                .map((board, j) => (
                                    <BoardIndexItem key={`board-${j}`} board={board} 
                                        boards_pins={boards_pins} pins={pins} isCurrentUser={isCurrentUser}/>
                                ))}
                        </div>
                    ))}
                </main>
            </div>
        );
    }
}

export default BoardIndex;
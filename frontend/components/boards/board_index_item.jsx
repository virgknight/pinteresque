import React from "react";
import { Link } from "react-router-dom";

const BoardIndexItem = ({ board, boards_pins, pins }) => {

    // get pins associated with board
    const pinAssignments = Object.values(boards_pins).filter((assignment) => assignment.board_id === board.id);
    let displayPins = [];
    pinAssignments.forEach((assignment) => displayPins.push(pins[assignment.pin_id]));

    return (
        <div className="board-index-item">
            <Link to={`/boards/${board.id}`}>

                <div className="board-preview-container">
                    {displayPins[0] ? <img className="left" src={displayPins[0].photoUrl} /> : <div className="left" />}
                    <div className="board-preview-column">
                        {displayPins[1] ? <img className="top-right small-img" src={displayPins[1].photoUrl} /> : <div className="top-right small-img"/>}
                        {displayPins[2] ? <img className="bottom-right small-img" src={displayPins[2].photoUrl} /> : <div className="bottom-right small-img" />}
                    </div>
                </div>

                <h4>{board.name}</h4>
                <p>{pinAssignments.length} pins</p>
            </Link>
        </div>
    );
}

export default BoardIndexItem;
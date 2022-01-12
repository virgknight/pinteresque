import React from "react";

const BoardSaveListItem = ({board, saved}) => {

    return (
        <div className="board-list-item">
            <div className="board-list-name">
                {('photoUrl' in board) ? 
                    <img className="board-mini-image" src={board.photoUrl} /> :
                    <div className="board-mini-image" />
                }
                <h4>{board.name}</h4>
            </div>
            { saved ?
                <button className="styled-button black save-shortcut">Saved</button> :
                <button className="styled-button red save-shortcut">Save</button>
            }
        </div>
    );
}

export default BoardSaveListItem;
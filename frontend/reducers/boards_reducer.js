import { RECEIVE_BOARD, REMOVE_BOARD } from "../actions/boards_actions";
import { RECEIVE_USER_BOARDS } from "../actions/users_actions";

const defaultState = {};

const BoardsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_BOARD:
            return Object.assign(newState, { [action.board.id]: action.board });
        case RECEIVE_USER_BOARDS:
            return action.payload.boards;
        case REMOVE_BOARD:
            delete newState[action.boardId];
            return newState;
        default:
            return state;
    }
};

export default BoardsReducer;
import { RECEIVE_BOARD, REMOVE_BOARD, RECEIVE_CURRENT_USER_BOARDS } from "../actions/boards_actions";
import { RECEIVE_USER_BOARDS } from "../actions/users_actions";
import { RECEIVE_FOLLOWING } from "../actions/follows_actions";

const defaultState = {};

const BoardsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_BOARD:
            return Object.assign(newState, { [action.board.id]: action.board });
        case RECEIVE_USER_BOARDS:
            return Object.assign(newState, action.payload.boards);
        case RECEIVE_CURRENT_USER_BOARDS:
            return Object.assign(action.boards, newState);
        case REMOVE_BOARD:
            delete newState[action.boardId];
            return newState;
        case RECEIVE_FOLLOWING:
            return Object.assign(action.payload.boards, newState); 
        default:
            return state;
    }
};

export default BoardsReducer;
import { RECEIVE_BOARD_ERRORS, RECEIVE_BOARD, CLEAR_BOARD_ERRORS } from "../actions/boards_actions";

const defaultState = [];

const boardErrorsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_BOARD_ERRORS:
            return action.errors;
        case RECEIVE_BOARD:
            return defaultState;
        case CLEAR_BOARD_ERRORS:
            return defaultState;
        default:
            return state;
    }
};

export default boardErrorsReducer;
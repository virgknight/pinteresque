import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_SESSION_ERRORS } from "../actions/session_actions";

const defaultState = [];

const sessionErrorsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return defaultState;
        case CLEAR_SESSION_ERRORS:
            return defaultState;
        default:
            return state;
    }
};

export default sessionErrorsReducer;
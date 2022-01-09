import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER_ERRORS, CLEAR_USER_ERRORS } from "../actions/users_actions";

const defaultState = [];

const userErrorsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return defaultState;
        case CLEAR_USER_ERRORS:
            return defaultState;
        default:
            return state;
    }
};

export default userErrorsReducer;
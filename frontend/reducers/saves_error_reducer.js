import { RECEIVE_SAVE_ERRORS, RECEIVE_SAVE, CLEAR_SAVE_ERRORS } from "../actions/save_actions";

const defaultState = [];

const savesErrorsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SAVE_ERRORS:
            return action.errors;
        case RECEIVE_SAVE:
            return defaultState;
        case CLEAR_SAVE_ERRORS:
            return defaultState;
        default:
            return state;
    }
};

export default savesErrorsReducer;
import { RECEIVE_PIN_ERRORS, RECEIVE_PIN, CLEAR_PIN_ERRORS } from "../actions/pins_actions";

const defaultState = [];

const pinErrorsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PIN_ERRORS:
            return action.errors;
        case RECEIVE_PIN:
            return defaultState;
        case CLEAR_PIN_ERRORS:
            return defaultState;
        default:
            return state;
    }
};

export default pinErrorsReducer;
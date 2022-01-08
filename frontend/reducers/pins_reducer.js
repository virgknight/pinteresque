import { RECEIVE_ALL_PINS, RECEIVE_PIN, REMOVE_PIN } from "../actions/pins_actions";
import { RECEIVE_USER_PINS } from "../actions/users_actions";

const defaultState = {};

const PinsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ALL_PINS:
            return action.pins;
        case RECEIVE_PIN:
            return Object.assign(newState, {[action.pin.id]: action.pin});
        case RECEIVE_USER_PINS:
            return Object.assign(newState, action.pins);
        case REMOVE_PIN:
            delete newState[action.pinId];
        default:
            return state;
    }
};

export default PinsReducer;
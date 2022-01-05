import { RECEIVE_ALL_PINS, RECEIVE_PIN } from "../actions/pins_actions";

const defaultState = {};

const PinsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_ALL_PINS:
            return action.pins;
        case RECEIVE_PIN:
            return Object.assign(newState, {[action.pin.id]: action.pin});
        default:
            return state;
    }
};

export default PinsReducer;
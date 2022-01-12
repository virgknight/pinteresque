import { RECEIVE_FOLLOW, RECEIVE_MANY_FOLLOWS, REMOVE_FOLLOW } from "../actions/follows_actions";

const defaultState = {};

const FollowsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_MANY_FOLLOWS:
            return Object.assign(newState, action.follows);
        case RECEIVE_FOLLOW:
            return Object.assign(newState, {[action.follow.id]: action.follow});
        case REMOVE_FOLLOW:
            delete newState[action.followId];
            return newState;
        default:
            return state;
    }
};

export default FollowsReducer;
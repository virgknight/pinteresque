import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_OTHER_USER, REMOVE_USER } from "../actions/users_actions";
import { RECEIVE_FOLLOWING } from "../actions/follows_actions";

const defaultState = { };

const usersReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign(newState, { [action.currentUser.id]: action.currentUser});
        case RECEIVE_OTHER_USER:
            if (!newState.hasOwnProperty(action.user.id)) {
                return Object.assign(newState, { [action.user.id]: action.user });
            } else {
                return newState;
            }
        case REMOVE_USER:
            delete newState[action.userId];
            return newState;
        case RECEIVE_FOLLOWING:
            return Object.assign(action.payload.users, newState); 
        default:
            return state;
    }
}

export default usersReducer;
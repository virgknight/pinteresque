import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const defaultState = { };

const usersReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign(newState, { [action.currentUser.id]: action.currentUser});
        default:
            return state;
    }
}

export default usersReducer;
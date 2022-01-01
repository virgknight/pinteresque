import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const defaultState = {currentUserId: null};

const sessionReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
      case RECEIVE_CURRENT_USER:
          newState.currentUserId = action.currentUser.id;
          return newState;
      case LOGOUT_CURRENT_USER:
          return defaultState;
      default:
          return state;  
    }
}

export default sessionReducer;
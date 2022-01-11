import { REMOVE_SAVE, RECEIVE_SAVE, RECEIVE_ALL_SAVES } from "../actions/save_actions";
import { RECEIVE_USER_BOARDS } from "../actions/users_actions";

const defaultState = {};

const BoardsPinsReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_SAVE:
            return Object.assign(newState, { [action.save.id]: action.save });
        case RECEIVE_ALL_SAVES:
            return action.saves;
        case REMOVE_SAVE:
            delete newState[action.saveId];
            return newState;
        case RECEIVE_USER_BOARDS:
            return Object.assign(newState, action.payload.boards_pins);
        default:
            return state;
    }
};

export default BoardsPinsReducer;
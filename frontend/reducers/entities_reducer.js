import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import PinsReducer from "./pins_reducer";
import BoardsReducer from "./boards_reducer";
import BoardsPinsReducer from "./boards_pins_reducer";
import FollowsReducer from "./follows_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    pins: PinsReducer,
    boards: BoardsReducer,
    boards_pins: BoardsPinsReducer,
    follows: FollowsReducer
});

export default entitiesReducer;
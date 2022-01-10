import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import pinErrorsReducer from "./pin_errors_reducer";
import userErrorsReducer from "./user_errors_reducer";
import boardErrorsReducer from "./boards_errors_reducer";
import savesErrorsReducer from "./saves_error_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    pins: pinErrorsReducer,
    users: userErrorsReducer,
    boards: boardErrorsReducer,
    saves: savesErrorsReducer
});

export default errorsReducer;
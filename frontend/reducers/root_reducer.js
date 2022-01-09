import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";
import UiReducer from "./ui_reducer";
import errorsReducer from "./errors_reducer";

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    ui: UiReducer,
    errors: errorsReducer
});

export default rootReducer;
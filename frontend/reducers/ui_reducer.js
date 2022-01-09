import { combineReducers } from "redux";
import NotificationsReducer from "./notifications_reducer";

const UiReducer = combineReducers({
    notification: NotificationsReducer
});

export default UiReducer;
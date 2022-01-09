import { CREATE_NOTIFICATION, CLOSE_NOTIFICATION } from "../actions/notification_actions";

const defaultState = null;

const NotificationsReducer = (state = defaultState, action) => {
    Object.freeze(state);

    switch(action.type) {
        case CREATE_NOTIFICATION:
            return action.notification;
        case CLOSE_NOTIFICATION:
            return defaultState;
        default: 
            return state;
    }
};

export default NotificationsReducer;
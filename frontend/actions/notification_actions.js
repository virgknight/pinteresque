export const CREATE_NOTIFICATION = "CREATE_NOTIFICATION";
export const CLOSE_NOTIFICATION = "CLOSE_NOTIFICATION";

const createNotification = notification => ({
    type: CREATE_NOTIFICATION,
    notification
});

const closeNotification = () => ({
    type: CLOSE_NOTIFICATION
});

export const notify = notification => dispatch => {
    dispatch(createNotification(notification));
    setTimeout(() => dispatch(closeNotification()), 3000);
};
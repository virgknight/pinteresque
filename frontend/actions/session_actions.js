import * as ApiSessionUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})

export const login = (user) => (dispatch) => {
    return ApiSessionUtil.login(user).then(
        (user) => dispatch(receiveCurrentUser(user)),
        (errors) => dispatch(receiveErrors(errors.responseJSON)))
};

export const logout = () => (dispatch) => {
    return ApiSessionUtil.logout().then(() => dispatch(logoutCurrentUser()))
};

export const signup = (user) => (dispatch) => {
    return ApiSessionUtil.signup(user).then(
        (user) => dispatch(receiveCurrentUser(user)),
        (errors) => dispatch(receiveErrors(errors.responseJSON)))
};
import { fetchOtherUser, updateUser, deleteUser, getUserPins } from "../util/user_util";
import { receiveCurrentUser } from "./session_actions";

export const RECEIVE_OTHER_USER = "RECEIVE_OTHER_USER";
export const REMOVE_USER = "REMOVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_USER_ERRORS = "CLEAR_USER_ERRORS";
export const RECEIVE_USER_PINS = "RECEIVE_USER_PINS";
export const RECEIVE_USER_BOARDS = "RECEIVE_USER_BOARDS";

const receiveOtherUser = user => ({
    type: RECEIVE_OTHER_USER,
    user
})

const removeUser = userId => ({
    type: REMOVE_USER,
    userId
})

export const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
});

export const clearUserErrors = () => ({
    type: CLEAR_USER_ERRORS
})

export const requestOtherUser = userId => dispatch => (
    fetchOtherUser(userId).then((user) => dispatch(receiveOtherUser(user)))
);

export const updateCurrentUser = user => dispatch => (
    updateUser(user).then(
        (user) => dispatch(receiveCurrentUser(user)),
        (errors) => dispatch(receiveUserErrors(errors.responseJSON)))
);

export const deleteCurrentUser = userId => dispatch => (
    deleteUser(userId).then(() => dispatch(removeUser(userId)))
);

// NOTE: this action updates the pin slice of state, not the user SoS!
const receiveUserPins = pins => ({
    type: RECEIVE_USER_PINS,
    pins
})

export const requestUserPins = userId => dispatch => (
    getUserPins(userId).then((pins) => dispatch(receiveUserPins(pins)))
)

// NOTE: this action updates the board slice of state, not the user SoS!
const receiveUserBoards = boards => ({
    type: RECEIVE_USER_BOARDS,
    boards
})

export const requestUserBoards = userId => dispatch => (
    getUserPins(userId).then((boards) => dispatch(receiveUserBoards(boards)))
)
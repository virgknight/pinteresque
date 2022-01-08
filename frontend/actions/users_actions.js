import { fetchOtherUser, getUserPins } from "../util/user_util";

export const RECEIVE_OTHER_USER = "RECEIVE_OTHER_USER";

const receiveOtherUser = user => ({
    type: RECEIVE_OTHER_USER,
    user
})

export const requestOtherUser = userId => dispatch => (
    fetchOtherUser(userId).then((user) => dispatch(receiveOtherUser(user)))
);

// NOTE: this action updates the pin slice of state, not the user SoS!
export const RECEIVE_USER_PINS = "RECEIVE_USER_PINS";

const receiveUserPins = pins => ({
    type: RECEIVE_USER_PINS,
    pins
})

export const requestUserPins = userId => dispatch => (
    getUserPins(userId).then((pins) => dispatch(receiveUserPins(pins)))
)
import { fetchOtherUser } from "../util/user_util";

export const RECEIVE_OTHER_USER = "RECEIVE_OTHER_USER";

const receiveOtherUser = user => ({
    type: RECEIVE_OTHER_USER,
    user
})

export const requestOtherUser = userId => dispatch => (
    fetchOtherUser(userId).then((user) => dispatch(receiveOtherUser(user)))
);
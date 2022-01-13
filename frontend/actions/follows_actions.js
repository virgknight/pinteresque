import * as ApiFollowUtil from "../util/follow_util";

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const RECEIVE_MANY_FOLLOWS = "RECEIVE_MANY_FOLLOWS";
export const RECEIVE_FOLLOWING = "RECEIVE_FOLLOWING";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

const receiveFollow = follow => ({
    type: RECEIVE_FOLLOW,
    follow
});

const receiveManyFollows = payload => ({
    type: RECEIVE_MANY_FOLLOWS,
    payload
});

const receiveFollowing = payload => ({
    type: RECEIVE_FOLLOWING,
    payload
})

const removeFollow = followId => ({
    type: REMOVE_FOLLOW,
    followId
});

export const requestUserFollows = userId => dispatch => (
    ApiFollowUtil.fetchUserFollows(userId).then((payload) => dispatch(receiveManyFollows(payload)))
);

export const requestUserFollowing = userId => dispatch => (
    ApiFollowUtil.fetchUserFollowing(userId).then((payload) => dispatch(receiveFollowing(payload)))
);

export const requestBoardFollows = boardId => dispatch => (
    ApiFollowUtil.fetchBoardFollows(boardId).then((payload) => dispatch(receiveManyFollows(payload)))
);

export const followUser = userId => dispatch => (
    ApiFollowUtil.createUserFollow(userId).then((follow) => dispatch(receiveFollow(follow)))
);

export const followBoard = boardId => dispatch => (
    ApiFollowUtil.createBoardFollow(boardId).then((follow) => dispatch(receiveFollow(follow)))
);

export const unfollow = followId => dispatch => (
    ApiFollowUtil.unfollow(followId).then(() => dispatch(removeFollow(followId)))
)
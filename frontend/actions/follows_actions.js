import * as ApiFollowUtil from "../util/follow_util";

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const RECEIVE_MANY_FOLLOWS = "RECEIVE_MANY_FOLLOWS";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

const receiveFollow = follow => ({
    type: RECEIVE_FOLLOW,
    follow
});

const receiveManyFollows = follows => ({
    type: RECEIVE_MANY_FOLLOWS,
    follows
});

const removeFollow = followId => ({
    type: REMOVE_FOLLOW,
    followId
});

export const requestUserFollows = userId => dispatch => (
    ApiFollowUtil.fetchUserFollows(userId).then((follows) => dispatch(receiveManyFollows(follows)))
);

export const requestBoardFollows = boardId => dispatch => (
    ApiFollowUtil.fetchBoardFollows(boardId).then((follows) => dispatch(receiveManyFollows(follows)))
);

export const followUser = userId => dispatch => (
    ApiFollowUtil.createUserFollow(userId).then((follow) => dispatch(receiveFollow(follow)))
);

export const followBoard = boardId => dispatch => (
    ApiFollowUtil.createBoardFollow(boardId).then((follow) => dispatch(receiveFollow(follow)))
);

export const unfollow = followId => dispatch => (
    ApiFollowUtil.unfollow.then(() => dispatch(removeFollow(followId)))
)
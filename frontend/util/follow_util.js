export const fetchUserFollows = userId => (
    $.ajax({
        url: `/api/users/${userId}/follows`,
        method: "GET"
    })
);

export const fetchUserFollowing = userId => (
    $.ajax({
        url: `api/users/${userId}/following`,
        method: "GET"
    })
);

export const createUserFollow = userId => (
    $.ajax({
        url: `/api/users/${userId}/follows`,
        method: "POST"
        // Don't need to include data- controller automatically pulls everything from path/current user
    })
);

export const fetchBoardFollows = boardId => (
    $.ajax({
        url: `/api/boards/${boardId}/follows`,
        method: "GET"
    })
);

export const createBoardFollow = boardId => (
    $.ajax({
        url: `/api/boards/${boardId}/follows`,
        method: "POST"
        // Don't need to include data- controller automatically pulls everything from path/current user
    })
);

export const unfollow = followId => (
    $.ajax({
        url: `/api/follows/${followId}`,
        method: "DELETE"
    })
)
import React from "react";

const FollowerIndexItem = ({ follower, getUserIcon, handleFollow, handleUnfollow, userFollow, viewUser }) => {
    let actionButton;
    if (userFollow(follower).length > 0) {
        actionButton = (<button className="styled-button" onClick={handleUnfollow(follower)}>Unfollow</button>);
    } else {
        actionButton = (<button className="styled-button red" onClick={handleFollow(follower)}>Follow</button>);
    }

    return (
        <li className="follow-index-item">
            <div className="user-info" onClick={viewUser(follower)}>
                {getUserIcon(follower)} &nbsp;
                {follower.display_name}
            </div>
            {actionButton}
        </li>
    );
}

export default FollowerIndexItem;
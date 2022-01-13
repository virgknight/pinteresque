import { connect } from "react-redux";
import { getUserIcon } from "../../util/user_util";
import { requestUserFollows, followUser, unfollow } from "../../actions/follows_actions";
import { notify } from "../../actions/notification_actions";
import FollowerIndex from "./follower_index";

const mSTP = ({ session, entities: { users, follows } }, ownProps) => ({
    followedEntity: ownProps.followedEntity, // passed either the user or board that has follows
    currentUser: users[session.currentUserId],
    follows
});

const mDTP = dispatch => ({
    getUserIcon: (user) => getUserIcon(user),
    requestUserFollows: (userId) => dispatch(requestUserFollows(userId)),
    followUser: (userId) => dispatch(followUser(userId)),
    unfollow: (followId) => dispatch(unfollow(followId)),
    notify: (action) => dispatch(notify(action))
});

export default connect(mSTP, mDTP)(FollowerIndex);
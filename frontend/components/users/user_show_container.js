import { connect } from "react-redux";
import { requestOtherUser } from "../../actions/users_actions";
import { getUserIconLarge } from "../../util/user_util";
import { requestUserFollows, requestUserFollowing, followUser, unfollow } from "../../actions/follows_actions";
import { notify } from "../../actions/notification_actions";
import UserShow from "./user_show";

const mSTP = ({ session, entities: { users, follows } }, ownProps) => ({
    user: users[ownProps.match.params.userId],
    currentUser: users[session.currentUserId],
    follows
});

const mDTP = dispatch => ({
    requestOtherUser: (userId) => dispatch(requestOtherUser(userId)),
    getUserIconLarge: (user) => getUserIconLarge(user),
    requestUserFollows: (userId) => dispatch(requestUserFollows(userId)),
    requestUserFollowing: (userId) => dispatch(requestUserFollowing(userId)),
    followUser: (userId) => dispatch(followUser(userId)),
    unfollow: (followId) => dispatch(unfollow(followId)),
    notify: (action) => dispatch(notify(action))
});

export default connect(mSTP, mDTP)(UserShow);
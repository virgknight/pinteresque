import { connect } from "react-redux";
import { requestOtherUser } from "../../actions/users_actions";
import { getUserIconLarge } from "../../util/user_util";
import { requestUserFollows, followUser, unfollow } from "../../actions/follows_actions";
import UserShow from "./user_show";

const mSTP = ({ session, entities: { users } }, ownProps) => ({
    user: users[ownProps.match.params.userId],
    currentUser: users[session.currentUserId]
});

const mDTP = dispatch => ({
    requestOtherUser: (userId) => dispatch(requestOtherUser(userId)),
    getUserIconLarge: (user) => getUserIconLarge(user),
    requestUserFollows: (userId) => dispatch(requestUserFollows(userId)),
    followUser: (userId) => dispatch(followUser(userId)),
    unfollow: (followId) => dispatch(unfollow(followId))
});

export default connect(mSTP, mDTP)(UserShow);
import { connect } from "react-redux";
import { getUserIcon } from "../../util/user_util";
import { followUser, unfollow } from "../../actions/follows_actions";
import { notify } from "../../actions/notification_actions";
import { withRouter } from "react-router-dom";
import FollowerIndex from "./follower_index";

const mSTP = ({ session, entities: { users, follows } }, ownProps) => ({
    currentUser: users[session.currentUserId],
    users,
    follows,
    user: ownProps.user,
    listType: ownProps.listType
});

const mDTP = dispatch => ({
    getUserIcon: (user) => getUserIcon(user),
    followUser: (userId) => dispatch(followUser(userId)),
    unfollow: (followId) => dispatch(unfollow(followId)),
    notify: (action) => dispatch(notify(action))
});

export default withRouter(connect(mSTP, mDTP)(FollowerIndex));
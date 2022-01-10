import { connect } from "react-redux";
import { requestOtherUser } from "../../actions/users_actions"
import UserSaved from "./user_saved";

const mSTP = ({ session, entities: { users } }, ownProps) => ({
    user: users[ownProps.match.params.userId],
    currentUser: users[session.currentUserId]
});

const mDTP = dispatch => ({
    requestOtherUser: (userId) => dispatch(requestOtherUser(userId))
});

export default connect(mSTP, mDTP)(UserSaved);
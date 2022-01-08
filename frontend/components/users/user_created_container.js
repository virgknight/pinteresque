import { connect } from "react-redux";
import { requestOtherUser, requestUserPins } from "../../actions/users_actions"
import UserCreated from "./user_created";

const mSTP = ({ entities: {users, pins}}, ownProps) => ({
    user: users[ownProps.match.params.userId],
    pins
});

const mDTP = dispatch => ({
    requestOtherUser: (userId) => dispatch(requestOtherUser(userId)),
    requestUserPins: (userId) => dispatch(requestUserPins(userId))
});

export default connect(mSTP, mDTP)(UserCreated);
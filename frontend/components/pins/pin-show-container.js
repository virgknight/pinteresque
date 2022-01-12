import { connect } from "react-redux";
import { requestPin } from "../../actions/pins_actions";
import { getUserIcon } from "../../util/user_util";
import { requestOtherUser } from "../../actions/users_actions";
import { notify } from "../../actions/notification_actions";
import PinShow from "./pin-show";

const mSTP = ({session, entities: {users, pins}}, ownProps) => ({
    pin: pins[ownProps.match.params.pinId],
    currentUser: users[session.currentUserId],
    users
});

const mDTP = dispatch => ({
    requestPin: (pinId) => dispatch(requestPin(pinId)),
    getUserIcon: (user) => getUserIcon(user),
    requestOtherUser: (userId) => dispatch(requestOtherUser(userId)),
    notify: () => dispatch(notify("copied"))
});

export default connect(mSTP, mDTP)(PinShow);
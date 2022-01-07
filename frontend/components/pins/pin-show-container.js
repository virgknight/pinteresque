import { connect } from "react-redux";
import { requestPin } from "../../actions/pins_actions";
import { getUserIcon } from "../../util/user_util";
import PinShow from "./pin-show";

const mSTP = ({session, entities: {users, pins}}, ownProps) => ({
    pin: pins[ownProps.match.params.pinId],
    currentUser: users[session.currentUserId]
});

const mDTP = dispatch => ({
    requestPin: (pinId) => dispatch(requestPin(pinId)),
    getUserIcon: (user) => getUserIcon(user)
});

export default connect(mSTP, mDTP)(PinShow);
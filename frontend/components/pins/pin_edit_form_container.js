import { connect } from "react-redux";
import { requestPin } from "../../actions/pins_actions";
import PinEditForm from "./pin_edit_form";

const mSTP = ({ session, entities: { users, pins } }, ownProps) => ({
    pin: pins[ownProps.match.params.pinId],
    currentUser: users[session.currentUserId]
});

const mDTP = dispatch => ({
    requestPin: (pinId) => dispatch(requestPin(pinId))
});

export default connect(mSTP, mDTP)(PinEditForm);
import { connect } from "react-redux";
import { requestPin, updatePin, deletePin, clearPinErrors } from "../../actions/pins_actions";
import { notify } from "../../actions/notification_actions";
import PinEditForm from "./pin_edit_form";

const mSTP = ({ session, entities: { users, pins }, errors }, ownProps) => ({
    pin: pins[ownProps.match.params.pinId],
    currentUser: users[session.currentUserId],
    errors: errors.pins
});

const mDTP = dispatch => ({
    requestPin: (pinId) => dispatch(requestPin(pinId)),
    updatePin: (pin) => dispatch(updatePin(pin)),
    deletePin: (pinId) => dispatch(deletePin(pinId)),
    clearPinErrors: () => dispatch(clearPinErrors()),
    notify: (action) => dispatch(notify(action))
});

export default connect(mSTP, mDTP)(PinEditForm);
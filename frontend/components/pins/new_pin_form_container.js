import { connect } from "react-redux";
import { createPin, clearPinErrors } from "../../actions/pins_actions";
import NewPinForm from "./new_pin_form";

const mSTP = ({ session, entities: { users }, errors }, ownProps) => ({
    currentUser: users[session.currentUserId],
    errors: errors.pins
});

const mDTP = dispatch => ({
    createPin: (pin) => dispatch(createPin(pin)),
    clearPinErrors: () => dispatch(clearPinErrors())
});

export default connect(mSTP, mDTP)(NewPinForm);
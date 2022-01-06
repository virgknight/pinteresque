import { connect } from "react-redux";
import { requestPin } from "../../actions/pins_actions";
import PinShow from "./pin-show";

const mSTP = ({entities}, ownProps) => ({
    pin: entities.pins[ownProps.match.params.pinId]
});

const mDTP = dispatch => ({
    requestPin: (pinId) => dispatch(requestPin(pinId))
});

export default connect(mSTP, mDTP)(PinShow);
import { connect } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { requestAllPins } from "../../actions/pins_actions";
import DiscoverGrid from "./discover_grid";

const mSTP = ({ session, entities: { users, pins } }) => ({
    currentUser: users[session.currentUserId],
    pins: Object.values(pins)
});

const mDTP = dispatch => ({
    requestAllPins: () => dispatch(requestAllPins())
});

export default withRouter(connect(mSTP, mDTP)(DiscoverGrid));
import { connect } from "react-redux";
import DiscoverFeed from "./discover_feed";
import { requestAllPins } from "../../actions/pins_actions"

const mSTP = ({ session, entities: { users, pins } }) => ({
    currentUser: users[session.currentUserId],
    pins
});

const mDTP = dispatch => ({
    requestAllPins: () => dispatch(requestAllPins())
});

export default connect(mSTP, mDTP)(DiscoverFeed);
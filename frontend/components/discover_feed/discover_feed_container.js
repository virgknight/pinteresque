import { connect } from "react-redux";
import DiscoverFeed from "./discover_feed";

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.currentUserId]
});

export default connect(mSTP)(DiscoverFeed);
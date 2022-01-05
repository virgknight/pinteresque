import { connect } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import DiscoverGrid from "./discover_grid";

const mSTP = ({ session, entities: { users } }, {pins, infinite}) => ({
    currentUser: users[session.currentUserId],
    pins,
    infinite
});

export default withRouter(connect(mSTP)(DiscoverGrid));
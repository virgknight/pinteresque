import { connect } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { requestAllSaves } from "../../actions/save_actions";
import { requestCurrentUserBoards } from "../../actions/boards_actions";
import DiscoverGrid from "./discover_grid";

const mSTP = ({ session, entities: { users } }, {pins, infinite}) => ({
    currentUser: users[session.currentUserId],
    pins,
    infinite
});

const mDTP = dispatch => ({
    requestAllSaves: () => dispatch(requestAllSaves()),
    requestCurrentUserBoards: () => dispatch(requestCurrentUserBoards())
});

export default withRouter(connect(mSTP, mDTP)(DiscoverGrid));
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { requestOtherUser, requestUserBoards } from "../../actions/users_actions";
import BoardIndex from "./board_index";

const mSTP = ({ entities: { users, boards, boards_pins, pins } }, ownProps) => ({
    user: users[ownProps.match.params.userId],
    boards,
    boards_pins,
    pins
});

const mDTP = dispatch => ({
    requestOtherUser: (userId) => dispatch(requestOtherUser(userId)),
    requestUserBoards: (userId) => dispatch(requestUserBoards(userId))
});

export default withRouter(connect(mSTP, mDTP)(BoardIndex));
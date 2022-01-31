import { connect } from "react-redux";
import { requestBoard, requestBoardPins } from "../../actions/boards_actions";
import {requestAllSaves} from "../../actions/save_actions";
import { getUserIcon } from "../../util/user_util";
import { requestOtherUser } from "../../actions/users_actions";
import { withRouter } from "react-router-dom";
import BoardShow from "./board_show";

const mSTP = ({ session, entities: { users, boards, pins, boards_pins } }, ownProps) => ({
    board: boards[ownProps.match.params.boardId],
    currentUser: users[session.currentUserId],
    users,
    pins,
    boards_pins
});

const mDTP = dispatch => ({
    requestBoard: (boardId) => dispatch(requestBoard(boardId)),
    requestBoardPins: (boardId) => dispatch(requestBoardPins(boardId)),
    getUserIcon: (user) => getUserIcon(user),
    requestOtherUser: (userId) => dispatch(requestOtherUser(userId)),
    requestAllSaves: () => dispatch(requestAllSaves())
});

export default withRouter(connect(mSTP, mDTP)(BoardShow));
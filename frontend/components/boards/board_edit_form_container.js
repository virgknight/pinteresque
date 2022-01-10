import { connect } from "react-redux";
import { requestBoard, updateBoard, deleteBoard, clearBoardErrors } from "../../actions/boards_actions";
import { notify } from "../../actions/notification_actions";
import { withRouter } from "react-router-dom";
import BoardEditForm from "./board_edit_form";

const mSTP = ({ session, entities: { users, boards }, errors }, ownProps) => ({
    board: boards[ownProps.match.params.boardId],
    currentUser: users[session.currentUserId],
    errors: errors.boards
});

const mDTP = dispatch => ({
    requestBoard: (boardId) => dispatch(requestBoard(boardId)),
    updateBoard: (board) => dispatch(updateBoard(board)),
    deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
    clearBoardErrors: () => dispatch(clearBoardErrors()),
    notify: (action) => dispatch(notify(action))
});

export default withRouter(connect(mSTP, mDTP)(BoardEditForm));
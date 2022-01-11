import { connect } from "react-redux";
import { createBoard, clearBoardErrors } from "../../actions/boards_actions";
import { notify } from "../../actions/notification_actions";
import { withRouter } from "react-router-dom";
import NewBoardForm from "./new_board_form";

const mSTP = ({ session, entities: { users, boards }, errors }, ownProps) => ({
    board: boards[ownProps.match.params.boardId],
    currentUser: users[session.currentUserId],
    errors: errors.boards
});

const mDTP = dispatch => ({
    createBoard: (board) => dispatch(createBoard(board)),
    clearBoardErrors: () => dispatch(clearBoardErrors()),
    notify: (action) => dispatch(notify(action))
});

export default withRouter(connect(mSTP, mDTP)(NewBoardForm));
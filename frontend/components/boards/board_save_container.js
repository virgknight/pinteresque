import { requestCurrentUserBoards } from "../../actions/boards_actions";
import { savePinToBoard, unsavePinFromBoard } from "../../actions/save_actions";
import { requestAllSaves } from "../../actions/save_actions";
import { notify } from "../../actions/notification_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BoardSave from "./board_save";

const mSTP = ({session, entities: {users, boards_pins, boards}}, ownProps) => ({
    currentUser: users[session.currentUserId],
    pinId: ownProps.pinId,
    boards_pins,
    boards,
    indexView: ownProps.indexView
});

const mDTP = dispatch => ({
    requestCurrentUserBoards: () => dispatch(requestCurrentUserBoards()),
    savePinToBoard: (save) => dispatch(savePinToBoard(save)),
    unsavePinFromBoard: (saveId) => dispatch(unsavePinFromBoard(saveId)),
    requestAllSaves: () => dispatch(requestAllSaves()),
    notify: (action) => dispatch(notify(action))
});

export default withRouter(connect(mSTP, mDTP)(BoardSave));
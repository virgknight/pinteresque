import { savePinToBoard, unsavePinFromBoard, requestAllSaves } from "../../actions/save_actions";
import { requestCurrentUserBoards } from "../../actions/boards_actions";
import { notify } from "../../actions/notification_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BoardSave from "./board_save";

const mSTP = ({session, entities: {users, boards_pins, boards}}, ownProps) => ({
    currentUser: users[session.currentUserId],
    pinId: ownProps.pinId,
    boards_pins,
    boards,
    indexView: ownProps.indexView //indicates whether the board save component is appearing over pins in a grid/index
});

const mDTP = dispatch => ({
    savePinToBoard: (save) => dispatch(savePinToBoard(save)),
    unsavePinFromBoard: (saveId) => dispatch(unsavePinFromBoard(saveId)),
    notify: (action) => dispatch(notify(action)),
    requestAllSaves: () => dispatch(requestAllSaves()),
    requestCurrentUserBoards: () => dispatch(requestCurrentUserBoards())
});

export default withRouter(connect(mSTP, mDTP)(BoardSave));
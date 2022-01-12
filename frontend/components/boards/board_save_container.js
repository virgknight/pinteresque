import { savePinToBoard, unsavePinFromBoard } from "../../actions/save_actions";
import { notify } from "../../actions/notification_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BoardSave from "./board_save";


// IMPORTANT NOTE!!!!
// The board save's parent component ***MUST*** run requestAllSaves (save action) and 
// requestCurrentUserBoards (board action) to update the boards_pins and boards slices of state!!
// This is not currently done within the board save component itself, as board save components are
// rendered over every pin index item in the discover feed/boards/etc; running these actions
// within the board save component's componentDidMount would result in a db query for every single 
// rendered pin, which is slow and unnecessary since the saves/current user boards info does not vary.
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
    notify: (action) => dispatch(notify(action))
});

export default withRouter(connect(mSTP, mDTP)(BoardSave));
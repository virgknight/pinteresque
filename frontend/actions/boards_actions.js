import * as ApiBoardsUtil from "../util/board_util";

export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const RECEIVE_CURRENT_USER_BOARDS = "RECEIVE_CURRENT_USER_BOARDS";
export const REMOVE_BOARD = "REMOVE_BOARD";
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";
export const CLEAR_BOARD_ERRORS = "CLEAR_BOARD_ERRORS";
export const RECEIVE_BOARD_PINS = "RECEIVE_BOARD_PINS";

const receiveBoard = board => ({
    type: RECEIVE_BOARD,
    board
});

const receiveCurrentUserBoards = boards => ({
    type: RECEIVE_CURRENT_USER_BOARDS,
    boards
})

const removeBoard = boardId => ({
    type: REMOVE_BOARD,
    boardId
})

const receiveBoardErrors = errors => ({
    type: RECEIVE_BOARD_ERRORS,
    errors
});

export const clearBoardErrors = () => ({
    type: CLEAR_BOARD_ERRORS
});

export const requestBoard = boardId => dispatch => (
    ApiBoardsUtil.fetchBoard(boardId).then((board) => dispatch(receiveBoard(board)))
);

export const requestCurrentUserBoards = () => dispatch => (
    ApiBoardsUtil.getCurrentUserBoards().then((boards) => dispatch(receiveCurrentUserBoards(boards)))
)

export const createBoard = board => dispatch => (
    ApiBoardsUtil.createBoard(board).then(
        (board) => dispatch(receiveBoard(board)),
        (errors) => dispatch(receiveBoardErrors(errors.responseJSON)))
);

export const updateBoard = board => dispatch => (
    ApiBoardsUtil.updateBoard(board).then(
        (board) => dispatch(receiveBoard(board)),
        (errors) => dispatch(receiveBoardErrors(errors.responseJSON)))
);

export const deleteBoard = boardId => dispatch => (
    ApiBoardsUtil.deleteBoard(boardId).then(() => dispatch(removeBoard(boardId)))
);


// NOTE: this action updates the pin slice of state, not the board SoS!
const receiveBoardPins = pins => ({
    type: RECEIVE_BOARD_PINS,
    pins
})

export const requestBoardPins = boardId => dispatch => (
    ApiBoardsUtil.getBoardPins(boardId).then((pins) => dispatch(receiveBoardPins(pins)))
)
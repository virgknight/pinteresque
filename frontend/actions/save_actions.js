import * as BPUtil from "../util/boards_pins_util";

export const RECEIVE_ALL_SAVES = "RECEIVE_ALL_SAVES";
export const RECEIVE_SAVE = "RECEIVE_SAVE";
export const REMOVE_SAVE = "REMOVE_SAVE";
export const RECEIVE_SAVE_ERRORS = "RECEIVE_SAVE_ERRORS";
export const CLEAR_SAVE_ERRORS = "CLEAR_SAVE_ERRORS";

const receiveAllSaves = saves => ({
    type: RECEIVE_ALL_SAVES,
    saves
});

const receiveSave = save => ({
    type: RECEIVE_SAVE,
    save
});

const removeSave = saveId => ({
    type: REMOVE_SAVE,
    saveId
});

const receiveSaveErrors = errors => ({
    type: RECEIVE_SAVE_ERRORS,
    errors
});

export const clearSaveErrors = () => ({
    type: CLEAR_SAVE_ERRORS
})

export const requestAllSaves = () => dispatch => (
    BPUtil.fetchAllSaves().then((saves) => dispatch(receiveAllSaves(saves)))
);

export const savePinToBoard = save => dispatch => (
    BPUtil.createSave(save).then(
        (save) => dispatch(receiveSave(save)),
        (errors) => dispatch(receiveSaveErrors(errors.responseJSON)))
);

export const unsavePinFromBoard = saveId => dispatch => (
    BPUtil.deleteSave(saveId).then(() => dispatch(removeSave(saveId)))
);
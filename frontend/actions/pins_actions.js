import * as ApiPinsUtil from "../util/pin_util";

export const RECEIVE_ALL_PINS = "RECEIVE_ALL_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";
export const RECEIVE_PIN_ERRORS = "RECEIVE_PIN_ERRORS";
export const CLEAR_PIN_ERRORS = "CLEAR_PIN_ERRORS";

const receiveAllPins = pins => ({
    type: RECEIVE_ALL_PINS,
    pins
});

const receivePin = pin => ({
    type: RECEIVE_PIN,
    pin
});

const removePin = pinId => ({
    type: REMOVE_PIN,
    pinId
})

const receivePinErrors = errors => ({
    type: RECEIVE_PIN_ERRORS,
    errors
});

export const clearPinErrors = () => ({
    type: CLEAR_PIN_ERRORS
})

export const requestAllPins = () => dispatch => (
    ApiPinsUtil.fetchAllPins().then((pins) => dispatch(receiveAllPins(pins)))
);

export const requestPin = pinId => dispatch => (
    ApiPinsUtil.fetchPin(pinId).then((pin) => dispatch(receivePin(pin)))
);

export const createPin = pin => dispatch => (
    ApiPinsUtil.createPin(pin).then(
        (pin) => dispatch(receivePin(pin)),
        (errors) => dispatch(receivePinErrors(errors.responseJSON)))
);

export const updatePin = pin => dispatch => (
    ApiPinsUtil.updatePin(pin).then(
        (pin) => dispatch(receivePin(pin)),
        (errors) => {
            debugger;
            dispatch(receivePinErrors(errors.responseJSON));
        })
);

export const deletePin = pinId => dispatch => (
    ApiPinsUtil.deletePin(pinId).then(() => dispatch(removePin(pinId)))
);
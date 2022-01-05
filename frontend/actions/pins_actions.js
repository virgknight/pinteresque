import * as ApiPinsUtil from "../util/pin_util";

export const RECEIVE_ALL_PINS = "RECEIVE_ALL_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";

const receiveAllPins = pins => ({
    type: RECEIVE_ALL_PINS,
    pins
});

const receivePin = pin => ({
    type: RECEIVE_PIN,
    pin
});

export const requestAllPins = () => dispatch => (
    ApiPinsUtil.fetchAllPins().then((pins) => dispatch(receiveAllPins(pins)))
);

export const requestPin = pinId => dispatch => (
    ApiPinsUtil.fetchPin(pinId).then((pin) => dispatch(receivePin(pin)))
);
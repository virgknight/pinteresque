import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root_reducer";
//VKNOTE: delete the below after development
import logger from "redux-logger";
import thunk from "redux-thunk";

const configureStore = (preloadedState={}) => (
    createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;
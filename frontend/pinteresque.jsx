import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

import {requestOtherUser} from "./actions/users_actions";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: { users: { [window.currentUser.id]: window.currentUser } },
            session: { currentUserId: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // VKNOTE: DEVELOPMENT CODE
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.requestOtherUser = requestOtherUser;
    // END DEVELOPMENT CODE

    ReactDOM.render(<Root store={store} />, root)
});
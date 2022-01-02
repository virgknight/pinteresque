import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            entities: { users: { [window.currentUser.id]: window.currentUser } },
            session: { id: window.currentUser.id }
        };
        delete window.currentUser;
    }
    const store = configureStore(preloadedState);

    // VKNOTE: DEVELOPMENT CODE
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // END DEVELOPMENT CODE

    ReactDOM.render(<Root store={store} />, root)
});
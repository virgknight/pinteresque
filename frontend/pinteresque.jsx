import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();

    // VKNOTE: DEVELOPMENT CODE
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // END DEVELOPMENT CODE

    ReactDOM.render(<h1>Pinteresque</h1>, root)
});
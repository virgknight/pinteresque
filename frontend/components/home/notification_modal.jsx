import React from "react";
import { connect } from "react-redux";

const Notification = ({notification}) => {
    if (!notification) return null;

    let message;
    switch(notification) {
        case 'copied':
            message = "Copied link to your clipboard to share";
            break;
        default:
            message = "";
    }

    debugger;
    return (
        <div className="notification-modal">
            {message}
        </div>
    );
}


const mSTP = ({ui}) => ({
    notification: ui.notification
});


export default connect(mSTP)(Notification);
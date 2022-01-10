import React from "react";
import { connect } from "react-redux";

const Notification = ({notification}) => {
    if (!notification) return null;

    let message;
    switch(notification) {
        case 'copied':
            message = "Copied link to your clipboard to share";
            break;
        case "pin updated":
            message = "Your Pin has been updated!";
            break;
        case "pin deleted":
            message = "Your Pin has been deleted";
            break;
        case "user updated":
            message = "Your profile information has been updated!";
            break;
        case "board updated":
            message = "Board has been updated!";
            break;
        case "board deleted":
            message = "Board has been deleted";
            break;
        default:
            return null;
    }

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
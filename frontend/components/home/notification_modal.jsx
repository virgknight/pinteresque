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
        case "board created":
            message = "Your new board has been created!";
            break;
        case "board updated":
            message = "Board has been updated!";
            break;
        case "board deleted":
            message = "Board has been deleted";
            break;
        case "pin saved to board":
            message = "Saved to board!";
            break;
        case "pin unsaved from board":
            message = "Removed from board";
            break;
        case "user followed":
            message = "You are now following this user!"; // real pinterest: "Following! Their created Pins will show up in your home feed!"
            break;
        case "comment":
            message = "You must update to Pinteresque Gold to leave comments";
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
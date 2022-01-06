import { connect } from "react-redux";
import PinShortcutButtons from "./pin_shortcut_buttons";

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.currentUserId]
});

export default connect(mSTP)(PinShortcutButtons);
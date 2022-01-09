import { connect } from "react-redux";
import { updateCurrentUser, clearUserErrors, deleteCurrentUser } from "../../actions/users_actions";
import AccountSettingsForm from "./account_settings_form";

const mSTP = ({ session, entities: { users }, errors }) => ({
    currentUser: users[session.currentUserId],
    errors: errors.users
});

const mDTP = dispatch => ({
    updateCurrentUser: (user) => dispatch(updateCurrentUser(user)),
    clearUserErrors: () => dispatch(clearUserErrors()),
    deleteCurrentUser: (userId) => dispatch(deleteCurrentUser(userId))
});

export default connect(mSTP, mDTP)(AccountSettingsForm);
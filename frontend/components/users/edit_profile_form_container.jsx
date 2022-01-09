import { connect } from "react-redux";
import { updateCurrentUser, clearUserErrors } from "../../actions/users_actions";
import { getUserIcon } from "../../util/user_util";
import EditProfileForm from "./edit_profile_form";

const mSTP = ({ session, entities: { users }, errors }) => ({
    currentUser: users[session.currentUserId],
    errors: errors.users
});

const mDTP = dispatch => ({
    updateCurrentUser: (user) => dispatch(updateCurrentUser(user)),
    clearUserErrors: () => dispatch(clearUserErrors()),
    getUserIcon: (user) => getUserIcon(user)
});

export default connect(mSTP, mDTP)(EditProfileForm);
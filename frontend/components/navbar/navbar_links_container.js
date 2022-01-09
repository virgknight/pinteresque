import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {getUserIconMini} from "../../util/user_util";
import NavBarLinks from './navbar_links';

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.currentUserId]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    getUserIconMini: (user) => getUserIconMini(user)
});

export default connect(mSTP, mDTP)(NavBarLinks);
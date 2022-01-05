import { connect } from 'react-redux';
import Splash from './splash';
import { withRouter } from "react-router-dom";
import { requestAllPins } from '../../actions/pins_actions';

const mSTP = ({ session, entities: { users, pins } }) => ({
    currentUser: users[session.currentUserId],
    pins
});

const mDTP = dispatch => ({
    requestAllPins: () => dispatch(requestAllPins())
});

export default withRouter(connect(mSTP, mDTP)(Splash));
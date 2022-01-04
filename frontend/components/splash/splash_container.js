import { connect } from 'react-redux';
import Splash from './splash';
import { withRouter } from "react-router-dom";

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.currentUserId]
});

export default withRouter(connect(mSTP)(Splash));
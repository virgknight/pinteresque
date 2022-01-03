import { connect } from 'react-redux';
import Splash from './splash';

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.currentUserId]
});

export default connect(mSTP)(Splash);
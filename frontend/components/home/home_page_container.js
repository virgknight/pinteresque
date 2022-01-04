import { connect } from "react-redux";
import HomePage from "./home_page";

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.currentUserId]
});

export default connect(mSTP)(HomePage);
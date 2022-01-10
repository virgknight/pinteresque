import React from "react";
import UserCreateMenu from "./user_create_menu";

class UserSaved extends React.Component {

    componentDidMount() {
        this.props.requestOtherUser(this.props.match.params.userId);
    }

    render () {
        const {user, currentUser} = this.props;
        const addBoard = (user.id === currentUser.id) ? (<UserCreateMenu currentUser={currentUser} />) : null;

        return (
            <div>
                { addBoard }
            </div>
        );
    }
}

export default UserSaved;
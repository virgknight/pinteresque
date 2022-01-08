import React from "react";
import { NavLink } from "react-router-dom";

class UserShow extends React.Component {
    componentDidMount () {
        this.props.requestOtherUser(this.props.match.params.userId)
    }

    render () {
        const { user, currentUser, getUserIconLarge } = this.props;

        if (!user) return null;

        const actionButton = (user.id === currentUser.id) ? 
            (<button className="styled-button">Edit Profile</button>) :
            (<button className="styled-button red">Follow</button>);

        return (
            <main>
                <header className="user-show-header">
                    {getUserIconLarge(user)}
                    <h1>{user.display_name}</h1>
                    <h5>@{user.username}</h5>
                    <h6>X followers &#183; X following</h6>
                    {actionButton}
                </header>
                <section id="created-saved-bar">
                    <NavLink to={`/users/${user.id}/_created`} activeClassName="underlined">Created</NavLink>
                    <NavLink to={`/users/${user.id}/_saved`} activeClassName="underlined">Saved</NavLink>
                </section>
            </main>
        );
    }
}

export default UserShow;
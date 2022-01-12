import React from "react";
import { NavLink } from "react-router-dom";

class UserShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
    }

    componentDidMount () {
        this.props.requestOtherUser(this.props.match.params.userId)
            .then(({ user }) => this.props.requestUserFollows(user.id));
    }

    filterFollows () {
        const {user} = this.props;
        return Object.values(this.props.follows).filter((follow) => follow.followable_id === user.id && follow.followable_type === "User");
    }

    userFollow () {
        const { currentUser } = this.props;
        return this.filterFollows().filter((follow) => follow.follower_id === currentUser.id);
    }

    handleFollow () {
        this.props.followUser(this.props.user.id)
            .then(() => this.props.notify("user followed"));
    }

    handleUnfollow () {
        const follow = this.userFollow()[0];
        this.props.unfollow(follow.id);
    }

    render () {
        const { user, currentUser, getUserIconLarge } = this.props;

        if (!user) return null;
        
        let actionButton;
        if (user.id === currentUser.id) {
            actionButton = (<button className="styled-button" onClick={() => this.props.history.push("/settings/edit-profile")}>Edit Profile</button>);
        } else if (this.userFollow().length > 0) {
            actionButton = (<button className="styled-button black" onClick={this.handleUnfollow}>Following</button>);
        } else {
            actionButton = (<button className="styled-button red" onClick={this.handleFollow}>Follow</button>);
        }

        const pronounText = user.pronouns ? (<h5>{user.pronouns}</h5>) : null;
        const shortBio = user.short_bio ? ` · ${user.short_bio}` : "";
        const followerCount = this.filterFollows().length;
        const followOrFollows = followerCount === 1 ? "follower" : "followers";

        return (
            <main>
                <header className="show-header">
                    {getUserIconLarge(user)}
                    <h1>{user.display_name}</h1>
                    {pronounText}
                    <br />
                    <h5>@{user.username}{shortBio}</h5>
                    {/* Followers/Following counts */}
                    <h6>{followerCount} {followOrFollows} &#183; X following</h6>
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
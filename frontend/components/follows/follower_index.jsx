import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import FollowerIndexItem from "./follower_index_item";

class FollowerIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { appear: false };

        this.reveal = this.reveal.bind(this);
        this.hide = this.hide.bind(this);
        this.filterFollows = this.filterFollows.bind(this);
        this.userFollow = this.userFollow.bind(this);
        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnfollow = this.handleUnfollow.bind(this);
        this.viewUser = this.viewUser.bind(this);
    }

    reveal() {
        this.setState({ appear: true });
    }

    hide() {
        this.setState({ appear: false });
    }

    filterFollows(user) {
        if (!user) return [];
        return Object.values(this.props.follows).filter((follow) => follow.followable_id === user.id && follow.followable_type === "User");
    }

    filterFollowing(user) {
        return Object.values(this.props.follows).filter((follow) => follow.follower_id === user.id);
    }

    userFollow(user) {
        const { currentUser } = this.props;
        return this.filterFollows(user).filter((follow) => follow.follower_id === currentUser.id);
    }

    handleFollow(user) {
        return () => this.props.followUser(user.id)
            .then(() => this.props.notify("user followed"));
    }

    handleUnfollow(user) {
        return () => {
            const follow = this.userFollow(user)[0];
            this.props.unfollow(follow.id);
        };
    }

    viewUser(user) {
        return () => {
            this.hide();
            this.props.history.push(`/users/${user.id}/_saved`);
        }
    }

    render () {
        const { users, getUserIcon } = this.props;
        const followersList = this.filterFollows(this.props.user);
        const followingList = this.filterFollowing(this.props.user);

        let followCount, indexItems;
        if (this.props.listType==="follower") {
            followCount = followersList.length + (followersList.length === 1 ? " follower" : " followers");

            indexItems = followersList.map((follow, i) => 
                                    <FollowerIndexItem key={`flw${i}`} follower={users[follow.follower_id]}
                                        getUserIcon={getUserIcon} handleFollow={this.handleFollow}
                                        handleUnfollow={this.handleUnfollow} userFollow={this.userFollow}
                                        viewUser={this.viewUser} />)
        } else {
            followCount = followingList.length + " following";

            indexItems = followingList.map((follow, i) => 
                                    <FollowerIndexItem key={`flw${i}`} follower={users[follow.followable_id]}
                                        getUserIcon={getUserIcon} handleFollow={this.handleFollow}
                                        handleUnfollow={this.handleUnfollow} userFollow={this.userFollow}
                                        viewUser={this.viewUser} />)
        }

        return (
            <div>
                <h6 onClick={this.reveal}>{followCount}</h6>

                <div onClick={this.hide}
                    className={this.state.appear ? "modal" : "hidden modal"}>
                    <div className="follow-modal-container">
                        <div className="modal-content follow-modal">
                            <h1>{this.props.listType==="follower" ? followCount : "Following"}</h1>
                            <div onClick={this.hide} className="close-button"><CloseIcon /></div>
                            <ul className="follow-list" onClick={e => e.stopPropagation()}>
                                {indexItems}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FollowerIndex;
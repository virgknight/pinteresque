import React from "react";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';

class UserCreateMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { appear: false };

        this.reveal = this.reveal.bind(this);
        this.hide = this.hide.bind(this);
    }

    reveal() {
        document.getElementById("create-menu-button").classList.add("black");
        this.setState({ appear: true });
    }

    hide() {
        document.getElementById("create-menu-button").classList.remove("black");
        this.setState({ appear: false });
    }

    render () {
        return (
            <section>
                <div id="create-menu-button" onClick={this.reveal}><AddIcon sx={{ fontSize: 40 }} /></div>

                <div onClick={this.hide}
                    className={this.state.appear ? "ps-navbutton modal" : "hidden ps-navbutton modal"}>
                    <ul onClick={e => e.stopPropagation()}
                        className="ps-more shadowed" id="user-create-options">
                        <p>Create</p>
                        <Link to="/pin-builder">Pin</Link>
                        <Link to={`/users/${this.props.currentUser.id}/_saved/board-builder`}>Board</Link>
                    </ul>
                </div>
            </section>
        );
    }
}

export default UserCreateMenu;
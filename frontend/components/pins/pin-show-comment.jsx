import React from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { getUserIcon } from "../../util/user_util";

class PinShowComment extends React.Component {
    revealCommentBar (e) {
        e.preventDefault();

        // rotate chevron
        const showButton = document.getElementById("show-more-comments");
        showButton.classList.toggle("rotate-down");

        const commentBar = document.getElementById("pin-show-comment-bar");
        commentBar.classList.toggle("hidden");
    }

    render () {
        return (<div className="pin-show-comment">
            <div className="ps-comment-header">
                <h4>Comments</h4>
                <button id="show-more-comments" onClick={this.revealCommentBar}>
                    <ChevronRightIcon fontSize="large"/>
                </button>
            </div>
            
            <div id="pin-show-comment-bar" className="hidden">
                <p>Ask a question, share feedback or give a fist bump</p>
                <div className="ps-comment-input-container">
                    {getUserIcon(this.props.currentUser)}
                    <input className="comment-input" type="text" placeholder="Add a comment" />
                </div>
            </div>
        </div>);
    }
}

export default PinShowComment;
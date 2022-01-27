import React from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

class PinShowComment extends React.Component {
    constructor(props) {
        super(props);
        this.handleComment = this.handleComment.bind(this);
    }

    revealCommentBar (e) {
        e.preventDefault();

        // rotate chevron
        const showButton = document.getElementById("show-more-comments");
        showButton.classList.toggle("rotate-down");

        const commentBar = document.getElementById("pin-show-comment-bar");
        commentBar.classList.toggle("hidden");
    }

    handleComment (e) {
        if (e.key === 'Enter') this.props.notify("comment");
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
                    {this.props.getUserIcon(this.props.currentUser)}
                    <input className="comment-input" type="text" placeholder="Add a comment" onKeyDown={this.handleComment} />
                </div>
            </div>
        </div>);
    }
}

export default PinShowComment;
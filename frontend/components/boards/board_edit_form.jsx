import React from "react";
import CloseIcon from '@mui/icons-material/Close';

class BoardEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            id: this.props.match.params.boardId
        };

        this.missingCurrentBoardInfo = true;

        this.update = this.update.bind(this);
        this.escape = this.escape.bind(this);
        this.returnToBoardShow = this.returnToBoardShow.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.requestBoard(this.props.match.params.boardId);
        this.props.clearBoardErrors();
    }

    componentDidUpdate() {
        if (this.missingCurrentBoardInfo) {
            this.missingCurrentBoardInfo = false;

            let startingDesc = this.props.board.description || "";
            this.setState({
                name: this.props.board.name,
                description: startingDesc
            });
        }
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    escape(e) {
        if (e.target === e.currentTarget) {
            this.props.history.goBack();
        }
    }

    returnToBoardShow() {
        this.props.history.push(`/boards/${this.props.board.id}`);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateBoard(this.state)
            .then(() => {
                this.props.notify("board updated");
                this.returnToBoardShow();
            });
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteBoard(this.state.id)
            .then(() => {
                this.props.notify("board deleted");
                this.props.history.push(`/users/${this.props.currentUser.id}/_saved`);
            });
    }

    render() {
        const { currentUser, board, errors } = this.props;
        const hasErrors = errors.length > 0;

        if (!board || this.missingCurrentBoardInfo) return null;
        if (currentUser.id !== board.owner_id) (<Redirect to={`/boards/${board.id}`} />);

        return (
            <div className="modal edit-modal" onClick={this.escape}>
                <form className="edit-board-modal modal-content">
                    <div onClick={this.returnToBoardShow} className="close-button"><CloseIcon /></div>
                    <h2 className="formtitle">Edit your Board</h2>
                    {hasErrors ? (<p className="error">All Boards need a name!</p>) : null}

                    <label>Name</label>
                    <input type="text"
                        value={this.state.name} onChange={this.update("name")} />
                    <br />

                    <label>Description</label>
                    <textarea placeholder="What's your board about?"
                        value={this.state.description} onChange={this.update("description")} />
                    <br />

                    <label>Action</label>
                    <section className="edit-flex">
                        <div className="delete-board">
                            <h5 style={{ fontWeight: "700" }}>Delete board</h5>
                            <h5>Delete this board forever.</h5>
                            <h5>You can't undo this!</h5>
                        </div>
                        <button onClick={this.handleDelete} className="styled-button edit-button">Delete</button> 
                    </section>

                    <div className="form-footer">
                        <button onClick={this.handleSubmit} className="red">Done</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default BoardEditForm;
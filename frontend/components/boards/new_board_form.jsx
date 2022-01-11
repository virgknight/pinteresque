import React from "react";

class NewBoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: ""
        };

        this.update = this.update.bind(this);
        this.escape = this.escape.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.clearBoardErrors();
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    escape(e) {
        if (e.target === e.currentTarget) {
            this.props.history.push(`/users/${this.props.currentUser.id}/_saved`);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const boardInfo = Object.assign({}, this.state, {owner_id: this.props.currentUser.id})
        this.props.createBoard(boardInfo)
            .then(({board}) => {
                this.props.notify("board created");
                this.props.history.push(`/boards/${board.id}`);
            });
    }

    render() {
        const { errors } = this.props;
        const hasErrors = errors.length > 0;

        return (
            <div className="modal edit-modal" onClick={this.escape}>
                <form className="edit-board-modal modal-content new-board-modal">
                    <h2 className="formtitle">Create board</h2>

                    <label>Name</label>
                    <input type="text" placeholder='Like "Places to go" or "Recipes to make"'
                        className={hasErrors ? "errored-field" : ""}
                        value={this.state.name} onChange={this.update("name")} />
                    {hasErrors ? (<p className="error">Don't forget to name your board!</p>) : null}
                    <br />

                    <label>Description (optional)</label>
                    <textarea placeholder="What's your board about?"
                        value={this.state.description} onChange={this.update("description")} />
                    <br />

                    <div className="form-footer">
                        <button onClick={this.handleSubmit} className={this.state.name ? "red" : ""}>Create</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewBoardForm;
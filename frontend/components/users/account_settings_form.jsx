import React from "react";
import EditProfileFooter from "./edit_profile_footer";

class AccountSettingsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.currentUser.email,
            password: "",
            madeUpdate: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.update = this.update.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.clearUserErrors();
    }

    toggleModal() {
        const modal = document.getElementsByClassName("modal")[0];
        modal.classList.toggle("hidden");
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.target.value, madeUpdate: true });
        }
    }

    handleUpdate(e) {
        e.preventDefault();
        const userParams = (({email, password}) => ({email, password}))(this.state);
        this.props.updateCurrentUser(userParams)
            .then(({ currentUser }) => this.props.history.push(`/users/${currentUser.id}/_saved`));
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteCurrentUser(this.props.currentUser.id)
            .then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <main className="edit-form">
                <h1>Account settings</h1>
                <h5>Set your login preferences and make big account changes here</h5>

                <form className="edit-profile">
                    {this.props.errors.map((error) => (<p className="error">{error}</p>))}

                    <h2>Basic Information</h2>
                    <label>Email</label>
                    <input type="text" value={this.state.email} onChange={this.update("email")} />
                    <br />

                    <label>Password</label>
                    <input type="password" value={this.state.password} onChange={this.update("password")} />
                    <br />
                    <br />

                    <h2>Account changes</h2>
                    <section className="edit-flex">
                        <div>
                            <h5 style={{fontWeight: "700"}}>Delete account</h5>
                            <h5>Delete your account and account data</h5>
                        </div>
                        <div>
                            <button onClick={this.toggleModal}
                                className="styled-button edit-button">Delete account</button>
                        </div>
                    </section>
                    <br />

                </form>

                {/* Delete account modal */}
                <div className="modal hidden" onClick={this.toggleModal}>
                    <div className="modal-content photo-modal" onClick={e => e.stopPropagation()}>
                        <h1>Delete your account</h1>
                        <br />
                        <p>Deleting your account means you won't be able to get your Pins or boards back. All your Pinteresque account data will be deleted.</p>
                        <br />
                        <p>Are you sure you're ready to leave forever?</p>
                        <br />
                        <button className="styled-button" onClick={this.handleDelete}>Delete my account</button>
                    </div>
                </div>

                <EditProfileFooter handleSubmit={this.handleUpdate} madeUpdate={this.state.madeUpdate} />
            </main>
        );
    }

}

export default AccountSettingsForm;
import React from "react";

class EditProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUser;
        this.toggleModal = this.toggleModal.bind(this);
        this.update = this.update.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount () {
        this.props.clearUserErrors();
    }

    toggleModal() {
        const modal = document.getElementsByClassName("modal")[0];
        modal.classList.toggle("hidden");
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleFile(e) {
        this.setState({ photoFile: e.currentTarget.files[0] })
    }

    render () {
        const {currentUser} = this.props;

        return (
        <main className="edit-form">
            <h1>Public Profile</h1>
            <h5>People visiting your profile will see the following info</h5>
            <form className="edit-profile">
                <label>Photo</label>
                <section className="edit-flex">
                    {this.props.getUserIcon(currentUser)}
                    <button className="styled-button" onClick={this.toggleModal}>Change</button>
                </section>
                <br />
                <section className="edit-flex">
                    <div>
                    <label>First name</label>
                    <input className="name" type="text" placeholder="First Name"/>
                    </div>
                    <div>
                    <label>Last name</label>
                    <input className="name" type="text" placeholder="Last Name" />
                    </div>
                </section>
                <br />
                <label>Short bio</label>
                <input type="text" placeholder="Describe yourself" />
                <br />
                <label>Pronouns</label>
                <p className="form-subtitle">
                    Choose up to 2 sets of pronouns to appear on your profile so others know how to <br/>refer to you. You can edit or remove these any time.
                </p>
                <br />
                <label>Username</label>
                <input type="text" />
            </form>

            {/* Change photo modal */}
            <div className="modal hidden" onClick={this.toggleModal}>
                <div className="modal-content photo-modal" onClick={e => e.stopPropagation()}>
                    <h1>Change your picture</h1>
                    <br />
                    <br />
                    <input
                        type="file"
                        className="choose-photo"
                        onChange={this.handleFile} />
                </div>
            </div>
        </main>
        );
    }
}

export default EditProfileForm;
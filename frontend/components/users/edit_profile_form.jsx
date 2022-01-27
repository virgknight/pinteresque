import React from "react";
import EditProfileFooter from "./edit_profile_footer";

class EditProfileForm extends React.Component {
    constructor(props) {
        super(props);
        const {currentUser} = this.props;
        this.state = {
            first_name: currentUser.first_name || "",
            last_name: currentUser.last_name || "",
            short_bio: currentUser.short_bio || "",
            pronouns: currentUser.pronouns || "Add your pronouns",
            username: currentUser.username,
            photoFile: null,
            photoUrl: "",
            madeUpdate: false
        };
        this.originalValues = currentUser;
        this.toggleModal = this.toggleModal.bind(this);
        this.update = this.update.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            this.setState({ [type]: e.target.value, madeUpdate: true });
        }
    }

    handleFile(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: reader.result, madeUpdate: true });
            this.toggleModal();
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ photoUrl: "", photoFile: null });
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        if (this.state.photoFile) {
            formData.append("user[avatar]", this.state.photoFile);
        }
        formData.append("user[first_name]", this.state.first_name);
        formData.append("user[last_name]", this.state.last_name);
        formData.append("user[short_bio]", this.state.short_bio);
        if (this.state.pronouns !== "Add your pronouns") {
            formData.append("user[pronouns]", this.state.pronouns);
        }
        formData.append("user[username]", this.state.username);

        this.props.updateCurrentUser(formData)
            .then(({ currentUser }) => {
                this.props.notify();
                this.props.history.push(`/users/${currentUser.id}/_saved`);
            });
    }

    render () {
        const {currentUser, errors} = this.props;

        let pronounOptions = ["ey/em", "he/him", "ne/nem", "she/her", "they/them", "ve/ver"];
        if (!this.props.pronouns) pronounOptions = ["Add your pronouns", ...pronounOptions];

        return (
        <main className="edit-form">
            <h1>Public Profile</h1>
            <h5>People visiting your profile will see the following info</h5>

            <form className="edit-profile">
                {errors.map((error) => (<p className="error">{error}</p>))}

                <label>Photo</label>
                <section className="edit-flex">
                    {this.state.photoUrl ? 
                        <img src={this.state.photoUrl} height="50" width="50" style={{ borderRadius: "50%", objectFit: "cover" }}/>
                        : this.props.getUserIcon(currentUser)}
                    <button className="styled-button" onClick={(e) => {e.preventDefault(); this.toggleModal();}}>Change</button>
                </section>
                <br />

                <section className="edit-flex">
                    <div>
                    <label>First name</label>
                    <input className="name" type="text" placeholder="First Name"
                        value={this.state.first_name} onChange={this.update("first_name")}/>
                    </div>
                    <div>
                    <label>Last name</label>
                    <input className="name" type="text" placeholder="Last Name" 
                        value={this.state.last_name} onChange={this.update("last_name")}/>
                    </div>
                </section>
                <br />

                <label>Short bio</label>
                <input type="text" placeholder="Describe yourself" 
                    value={this.state.short_bio} onChange={this.update("short_bio")}/>
                <br />

                <label>Pronouns</label>
                    <select className="pronoun-container" value={this.state.pronouns} 
                        onChange={this.update("pronouns")}>
                            {pronounOptions.map((pronoun, i) => (
                                <option readOnly key={`pronoun-${i}`} value={pronoun}>{pronoun}</option>
                            ))}
                </select>
                <p className="form-subtitle">
                    Choose pronouns to appear on your profile so others know how to <br/>refer to you. You can edit or remove these any time.
                </p>
                <br />

                <label>Username</label>
                <input type="text" style={{marginBottom: "150px"}}
                    value={this.state.username} onChange={this.update("last_name")}/>

            </form>

            {/* Update photo modal */}
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

            <EditProfileFooter handleSubmit={this.handleSubmit} madeUpdate={this.state.madeUpdate} />
        </main>
        );
    }
}

export default EditProfileForm;
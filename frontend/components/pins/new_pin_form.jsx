import React from "react";
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PinOwnerInfo from "./pin_owner_info";

class NewPinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            owner_id: this.props.currentUser.id,
            title: "",
            alt_text: "",
            photoFile: null
        };

        this.update = this.update.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleFile (e) {
        this.setState({ photoFile: e.currentTarget.files[0] })
    }

    handleSubmit (e) {
        e.preventDefault();

        if (!this.state.photoFile) return;

        const formData = new FormData();
        formData.append("pin[title]", this.state.title);
        formData.append("pin[alt_text]", this.state.alt_text);
        formData.append("pin[owner_id]", this.state.owner_id);
        formData.append("pin[photo]", this.state.photoFile);

        this.props.createPin(formData)
            .then(({pin}) => this.props.history.push(`/pins/${pin.id}`));
    }

    render () {
        const {currentUser} = this.props;
        return (
            <div className="np-form-background">
                <form id="new-pin-form">
                    <button className="save red" onClick={this.handleSubmit}>Save</button>

                    <div className="photo-upload-container">
                        <div className="photo-upload-inner-container">
                            <div className="photo-upload-flex">
                                <FileUploadIcon sx={{ fontSize: 40, color: "gray" }} />
                                <input
                                    type="file"
                                    className="choose-pin-photo"
                                    onChange={this.handleFile} />
                            </div>
                        </div>
                    </div>

                    <div className="photo-info-container">
                        <input className="np-title"
                            type="text" 
                            value={this.state.title}
                            placeholder="Add your title"
                            onChange={this.update("title")}/>

                        <PinOwnerInfo getUserIcon={this.props.getUserIcon} owner={currentUser} />

                        <input className="np-alt"
                            type="text"
                            value={this.state.alt_text}
                            placeholder="Tell everyone what your Pin is about"
                            onChange={this.update("alt_text")} />
                    </div>
                </form>
            </div >
        );
    }
}

export default NewPinForm;
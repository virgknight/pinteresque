import React from "react";
import { Redirect } from "react-router-dom";

class PinEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "", 
                        alt_text: "", 
                        id: this.props.match.params.pinId };

        this.missingCurrentPinInfo = true;

        this.update = this.update.bind(this);
        this.escape = this.escape.bind(this);
        this.returnToPinShow = this.returnToPinShow.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        this.props.requestPin(this.props.match.params.pinId);
        this.props.clearPinErrors();
    }

    componentDidUpdate () {
        if (this.missingCurrentPinInfo) {
            this.missingCurrentPinInfo = false;

            let startingAltValue = this.props.pin.alt_text || "";
            this.setState({
                title: this.props.pin.title,
                alt_text: startingAltValue
            });
        }
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    escape(e) {
        if (e.target === e.currentTarget ){
            this.props.history.goBack();
        }
    }

    returnToPinShow() {
        this.props.history.push(`/pins/${this.props.pin.id}`);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updatePin(this.state)
            .then(() => this.returnToPinShow());
    }

    render () {
        const {currentUser, pin} = this.props;
        const {title, alt_text} = this.state;

        if (!pin || this.missingCurrentPinInfo) return null;
        if (currentUser.id !== pin.owner_id) {
            console.log("hitting redirect");
            return (<Redirect to={`/pins/${pin.id}`} />);
        };

        return (
        <div className="modal edit-modal" onClick={this.escape}>
            <form className="edit-pin-modal modal-content">
                <h2 className="formtitle">Edit this Pin</h2>

                <div className="formbody">
                    <table className="edit-inputs">
                        <tbody>
                        <tr>
                            <td><label>Title</label></td>
                            <td>
                                <input type="text"
                                    value={title}
                                    onChange={this.update("title")} />
                            </td>
                        </tr>
                        <tr>
                            <td><label>Alt text</label></td>
                            <td>
                                <input type="text"
                                    value={alt_text}
                                    placeholder="Tell us about this Pin..."
                                    onChange={this.update("alt_text")} />
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <img className="edit-preview" src={pin.photoUrl} />
                </div>

                {this.props.errors.map((err) => (
                    <p className="error">{err}</p>
                ))}

                <div className="form-footer">
                    <button>Delete</button>
                    <div>
                        <button onClick={this.returnToPinShow}>Cancel</button>
                        <button onClick={this.handleSubmit} className="red">Save</button>
                    </div>
                </div>
            </form>
        </div>
        );
    }
}

export default PinEditForm;
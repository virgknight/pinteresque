import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            age: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount () {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        let {email, age} = this.state;
        const newUserName = email.slice(0, email.indexOf('@'));
        const user = Object.assign({}, this.state, { age: parseInt(age), username: newUserName });
        debugger;
        this.props.processForm(user).then(() =>
            this.props.history.push("/"));
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    render() {
        let { email, password, age } = this.state;
        return (
            <div className="modal">
                <div className="modal-content">
                <div onClick={() => this.props.history.push("/")} className="close-button"><CloseIcon /></div>
                <form>
                    <img src={window.round_logo} width="50" height="50" />
                    <h2>Welcome to Pinteresque</h2>
                    <p>Get tons of new ideas!</p>
                    <br />
                    {this.props.errors.map((error, i) => (<p key={`autherror-${i}`} className="error">{error}</p>))}
                    <input type="text"
                        placeholder="Email"
                        value={email}
                        onChange={this.handleInput('email')}></input>
                    <br />
                    <input type="password"
                        placeholder="Password"
                        value={password}
                        onChange={this.handleInput('password')}></input>
                    <br />
                    <input type="number"
                        placeholder="Age"
                        value={age}
                        onChange={this.handleInput('age')}></input>
                    <button className="modal-button"
                            onClick={this.handleSubmit}>Continue</button>
                </form>
                <Link to="/login">Already a member? Log in</Link>
                </div>
            </div>
        );
    }
};

export default SignupForm;
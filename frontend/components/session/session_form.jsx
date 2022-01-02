import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() =>
            this.props.history.push("/"));
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    render() {
        const buttonText = this.props.formType === "signup" ? "Continue" : "Log in";
        let { email, password, age} = this.state;
        return (
            <div>
                {this.props.errors.map((error) => (<p>{error}</p>))}
                <form>
                    <h2>Welcome to Pinterest</h2>
                    <input type="text"
                        value={email ? email : "Email"}
                        onChange={this.handleInput('email')}></input>
                    <br />
                    <input type="password"
                        value={password ? password : "Create a password"}
                        onChange={this.handleInput('password')}></input>
                    <br />
                    {this.props.formType === "signup" ?
                        <input type="number"
                            value={age ? age : "Age"}
                            onChange={this.handleInput('age')}></input> : {}}
                    <button onClick={this.handleSubmit}>{buttonText}</button>
                </form>
                {this.props.formType === "signup" ?
                    <Link to="/login">Already a member? Log in</Link> :
                    <Link to="/signup">Not on Pinteresque yet? Sign up</Link>}
            </div>
        );
    }
};

export default SessionForm;
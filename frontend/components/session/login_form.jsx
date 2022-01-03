import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user).then(() =>
            this.props.history.push("/"));
    }

    handleDemo(e) {
        e.preventDefault();
        const demoUser = { email: "demo@demo.gmail.com", password: "football123"};
        this.props.login(demoUser).then(() =>
            this.props.history.push("/"));
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    render() {
        let { email, password } = this.state;
        return (
            <div className="modal">
                <div className="modal-content">
                <form>
                    <img src={window.round_logo} width="50" height="50" />
                    <h2>Welcome to Pinteresque</h2>
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
                    {this.props.errors.map((error) => (<p>{error}</p>))} 
                    <button className="modal-button" 
                            onClick={this.handleSubmit}>Log in</button>
                    <p><strong>or</strong></p>
                    <button className="modal-button demo-user-button" 
                            onClick={this.handleDemo}>Log in as Demo User</button>
                </form>
                <Link to="/signup">Not on Pinteresque yet? Sign up</Link>
                </div>
            </div>
        );
    }
};

export default LoginForm;
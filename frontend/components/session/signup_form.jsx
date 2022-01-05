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

    fixErrors (rawErrors) {
        let newErrors = {email: null, password: null, age: null};
        
        rawErrors.forEach((error) =>{
            if (error.includes("Email")) {
                newErrors.email = (<p className="error">
                    You missed a spot! Don't forget to add your email.
                </p>);
            } else if (error.includes("Password")) {
                newErrors.password = (<p className="error">
                    Oops! Passwords must be 6 characters or longer.
                </p>);
            } else if (error.includes("Age must be greater")) {
                newErrors.age = (<p className="error">
                    Sorry! You must be 13 years or older to use Pinteresque.
                </p>);
            } else if (error.includes("Age is not a number")) {
                newErrors.age = (<p className="error">
                    You missed a spot! Don't forget to add your age.
                </p>);
            }
        })

        return newErrors;
    }

    handleSubmit(e) {
        e.preventDefault();
        let {email, age} = this.state;
        const newUserName = email.slice(0, email.indexOf('@'));
        const user = Object.assign({}, this.state, { age: parseInt(age), username: newUserName });
        this.props.processForm(user).then(() =>
            this.props.history.push("/pins"));
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    render() {
        const errors = this.fixErrors(this.props.errors)
        let { email, password, age } = this.state;
        return (
            <div className="modal">
                <div className="modal-content">
                <div onClick={() => this.props.history.push("/")} className="close-button"><CloseIcon /></div>
                <form>
                    <img src={window.round_logo} width="50" height="50" />
                    <h2>Unlimited free access to the world's best ideas</h2>
                    <p>Sign up to see more!</p>
                    <br />
                    <input type="text"
                        placeholder="Email"
                        value={email}
                        onChange={this.handleInput('email')}
                        className={errors.email ? "errored-field" : ""}></input>
                    {errors.email}
                    <br />
                    <input type="password"
                        placeholder="Password"
                        value={password}
                        onChange={this.handleInput('password')}
                        className={errors.password ? "errored-field" : ""}></input>
                    {errors.password}
                    <br />
                    <input type="number"
                        placeholder="Age"
                        value={age}
                        onChange={this.handleInput('age')}
                        className={errors.age ? "errored-field" : ""}></input>
                    {errors.age}
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
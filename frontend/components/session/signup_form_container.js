import { connect } from "react-redux";
import { signup, clearErrors } from "../../actions/session_actions";
import SignupForm from "./signup_form";

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (formUser) => dispatch(signup(formUser)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
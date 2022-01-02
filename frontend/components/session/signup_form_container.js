import { connect } from "react-redux";
import { signup } from "../../actions/session_actions"

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.session,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (formUser) => dispatch(signup(formUser))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
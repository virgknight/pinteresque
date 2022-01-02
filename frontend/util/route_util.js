import { Route } from "react-router-dom";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Auth = ({ loggedIn, path, component: Component }) => (
    <Route
        path={path}
        render={(props) =>
            loggedIn ?
                <Redirect to="/" /> :
                <Component {...props} />
        }>
    </Route>
);

const mapStateToProps = state => ({
    loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
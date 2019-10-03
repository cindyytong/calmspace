import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id),
});

// if logged out direct to homepage, otherwise direct to proper compoennt
const Auth = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props => (
    loggedIn ? <Redirect to="/" /> : <Component {...props} />
    )}
  />
);

// if logged in direct to auth page otherwise direct to homepage 
const Protected = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props => (
    loggedIn ? <Component {...props} /> : <Redirect to="/" />
    )}
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps, undefined)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, undefined)(Protected));
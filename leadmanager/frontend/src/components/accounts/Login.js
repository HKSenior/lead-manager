import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { login } from '../../actions/auth';

export class Login extends Component {
    state ={
        username: '',
        email: '',
        password: '',
        password2: ''
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password);
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }

        const { username, password } = this.state;
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5 shadow">
                    <h1 className="text-center mt-4">Log In</h1>
                    <form onSubmit={ this.onSubmit }>
                        <div className="form-group input-group mt-4 px-5">
                            <input
                                type="text"
                                className="form-control form-input"
                                placeholder="Username"
                                name="username"
                                onChange={this.onChange}
                                value={username}
                            />
                        </div>
                        <div className="form-group input-group mt-4 px-5">
                            <input
                                type="password"
                                className="form-control form-input"
                                placeholder="Password"
                                name="password"
                                onChange={this.onChange}
                                value={password}
                            />
                        </div>
                        <div className="form-group text-center mt-5">
                            <button type="submit" className="btn btn-primary rounded">
                                Login 
                            </button>
                        </div>
                        <p className="text-center mt-4">
                            Don't have an account? <Link to="/register">Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);

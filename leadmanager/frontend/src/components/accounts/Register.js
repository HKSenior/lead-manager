import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';

export class Register extends Component {
    state ={
        username: '',
        email: '',
        password: '',
        password2: ''
    }

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }

    onSubmit = e => {
        e.preventDefault();
        const { username, email, password, password2 } = this.state;
        if (password !== password2) {
            this.props.createMessage({
                passwordDoNotMatch: 'Passwords do not match'
            });
        } else {
            const newUser = { email, username, password };
            this.props.register(newUser);
        }
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.props.isAuthenticated)
            return <Redirect to="/" />

        const { username, email, password, password2 } = this.state;

        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5 shadow">
                    <h1 className="text-center mt-4">Register</h1>
                    <form onSubmit={ this.onSubmit }>
                        <div className="form-group input-group mt-4 px-5">
                            <input
                                type="text"
                                className="form-control form-input"
                                placeholder="Username"
                                name="username"
                                onChange={ this.onChange }
                                value={ username }
                            />
                        </div>
                        <div className="form-group input-group mt-4 px-5">
                            <input
                                type="email"
                                className="form-control form-input"
                                placeholder="Email"
                                name="email"
                                onChange={ this.onChange }
                                value={ email }
                            />
                        </div>
                        <div className="form-group input-group mt-4 px-5">
                            <input
                                type="password"
                                className="form-control form-input"
                                placeholder="Password"
                                name="password"
                                onChange={ this.onChange }
                                value={ password }
                            />
                        </div>
                        <div className="form-group input-group mt-4 px-5">
                            <input
                                type="password"
                                className="form-control form-input"
                                placeholder="Repeat Password"
                                name="password2"
                                onChange={ this.onChange }
                                value={ password2 }
                            />
                        </div>
                        <div className="form-group text-center mt-5">
                            <button type="submit" className="btn btn-primary rounded">
                                Register
                            </button>
                        </div>
                        <p className="text-center mt-4">
                            Already have an account? <Link to="/login">Login</Link>
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

export default connect(mapStateToProps, { register, createMessage })(Register);

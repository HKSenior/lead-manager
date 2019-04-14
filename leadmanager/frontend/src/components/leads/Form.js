import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';

export class Form extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        name: '',
        email: '',
        message: ''
    }

    static propTypes = {
        addLead: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });
    onSubmit = e => { 
        e.preventDefault();
        const { name, email, message } = this.state;
        const lead = { name, email, message };
        this.props.addLead(lead);
        this.setState({
            name: '',
            email: '',
            message: ''
        });
    }

    render() {
        const { name, email, message } = this.state;
        return (
            <div className="card card-body mt-4 mb-5 shadow">
                <h1 className="text-center">Add A New Lead</h1>
                <form onSubmit={ this.onSubmit }>
                    <div className="form-group input-group mt-4 px-5">
                        <input
                            className="form-control form-input"
                            placeholder="Name"
                            type="text"
                            name="name"
                            onChange={ this.onChange }
                            value={ name }
                        />
                    </div>
                    <div className="form-group input-group mt-4 px-5">
                        <input
                            className="form-control form-input"
                            placeholder="Email"
                            type="email"
                            name="email"
                            onChange={ this.onChange }
                            value={ email }
                        />
                    </div>
                    <div className="form-group input-group mt-4 px-5">
                        <textarea
                            className="form-control form-input"
                            placeholder="Message"
                            type="text"
                            name="message"
                            onChange={ this.onChange }
                            value={ message }
                        />
                    </div>
                    <div className="form-group text-center mt-5">
                        <button type="submit" name="submitBtn" className="btn btn-primary rounded">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    };
}

export default connect(null, { addLead })(Form);

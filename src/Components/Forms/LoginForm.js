import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Message } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../Messages/InlineError';


class LoginForm extends React.Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    }
        onChange = e => this.setState({ data: { ...this.state.data,
             [e.target.name]: e.target.value 
            }});

        onSubmit = () => {
            const errors = this.validate(this.state.data);
            this.setState({ errors });
            if (Object.keys(errors).length === 0 ) {
                this.setState({ loading: true});
                this.props.submit(this.state.data)
                .catch(err => this.setState({ errors: err.response.data.errors, loading: false }));
            }
        };
        validate = (data) => {
            const errors = {};
            if(!Validator.isEmail(data.email)) errors.email = 'Invalid Email';
            if(!data.password) errors.password = 'Can\'t be empty'
            return errors;
        }    

    render() {
        /* const { data, errors, loading } = this.state; */
        return (
            
        <Form onSubmit={this.onSubmit} loading={this.state.loading}>
            { this.state.errors.global && <Message negative>
            <Message.Header>Something went wrong</Message.Header>
            <p>{this.state.errors.global}</p>
            </Message>}
          <Form.Field error={!!this.state.errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            value={this.state.data.email}
            onChange={this.onChange}
          />
          {this.state.errors.email && <InlineError text={this.state.errors.email} />}
            </Form.Field>
            <Form.Field error={!!this.state.errors.email}>
                <label htmlFor="password">Password</label>
                <input
                    type = "password"
                    id = "password"
                    name = "password"
                    placeholder = "Make it secure"
                    value={this.state.data.password}
                    onChange={this.onChange}
                    />
                {this.state.errors.password && <InlineError text={this.state.errors.password} />}
            </Form.Field>
          <Button primary>Login</Button>  
        </Form>
    
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;


import React from 'react';
import LoginForm from './../Forms/LoginForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../Actions/Auth';


class LoginPage extends React.Component {
    submit = (data) => 
        this.props.login(data).then(() => this.props.history.push('/dashboard'));
    render () {
        return (
        <div>
            <h1> Login Page </h1>
            <LoginForm submit={this.submit}/>
        </div>
        );
    }
}
   
LoginPage.propTypes = {
    history: PropTypes.shape({
    push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
};

export default connect(null, {login})(LoginPage);
//Allowing dispatching only for the function we need - login

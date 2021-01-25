import React, { Component } from 'react';
import { Button } from '../../../components/atoms/button';
import { connect } from 'react-redux';
import { loginFirebase } from '../../../config/redux/actions';
import { createBrowserHistory } from 'history';
import '../../../assets/style/login.scss';

const initialState = {
    email: '',
    password: '',
    emailError: '',
    passwordError: ''
}

class Login extends Component {

    state = initialState;
    
    onChangeValue = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    validate = () => {
        if(!this.state.email.includes('@')) {
            this.setState({
                emailError: 'invalid your email'
            })
        } else {
            this.setState({ emailError: '' })
        }


        if(!this.state.password.length) {
            this.setState({
                passwordError: 'password not null'
            })
        } else {
            this.setState({ passwordError: '' })
        }
        
        return true
    }

    login = async () => {
        const { email, password } = this.state;
        const { history, loginSession } = this.props;
        const validate = this.validate();

        if(validate) {
            const res = await loginSession({email, password});
             if(res) {
                 const userData = localStorage.setItem('data', JSON.stringify(res));
                 setTimeout(() => {
                     this.setState({
                         email: '',
                         password: '',
                     })
                 }, 1970)
                 
                 history.push('/dashboard');
             }else{
                 console.log('login you failed')
             }
        }
    }

    render() {
        const { login, onChangeValue } = this;
        return (
                <div>
                    <div className="container">
                        <form onSubmit={login}>
                            <h1> Login Page </h1>
                            <input type="email" id="email" onChange={onChangeValue} value={this.state.email} />
                                <p className="emailError"> {this.state.emailError} </p>
                            <input type="password" id="password" onChange={onChangeValue} value={this.state.password} />
                                <p className="passwordError"> {this.state.passwordError} </p>
                        </form>
                    </div>
                    <Button onClick={login} title="SignUp" id="signUp" loading={this.props.loading} />
                </div>
            );
        }
    }

    const getStateRedux = (state) => {
        return {
            loading: state.isLoading,
            user: state.user
        }
    }

    const getActionRedux = (dispatch) => {
        return {
            loginSession: (data) => dispatch(loginFirebase(data))
        }
    }

export default connect(getStateRedux, getActionRedux)(Login);
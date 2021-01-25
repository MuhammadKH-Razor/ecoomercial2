import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button } from '../../../components/atoms/button';
import { valueChange, registerFirebase } from '../../../config/redux/actions';
// import {createBrowserHistory} from 'react-router';

class Register extends Component {

    state = {
        email: '',
        password: '',
    }

    onChangeValue = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    signUp = () => {
        const {email, password} = this.state;
        
        this.props.register({email, password});
        setTimeout(() => {
            this.setState({
                email: '',
                password: ''
            })
        }, 1970)
    }

    dashboard = () => {
        this.props.gantiNama();
        // const history = createBrowserHistory();
        // history.push('/dashboard');
    }


    render() {
        const {signUp, onChangeValue, dashboard} = this;
        return (
            <div>
                <div className="container">
                    <h1> {this.props.nama} </h1>
                    <input type="email" id="email" onChange={onChangeValue} value={this.state.email} />
                    <input type="password" id="password" onChange={onChangeValue} value={this.state.password} />
                </div>
                <Button onClick={signUp} title="SignUp" id="signUp" loading={this.props.loading} />
                <Button onClick={dashboard} title={this.props.nama} id="dashboard" />
            </div>
        );
    }
}

const getStateRedux = (state) => {
    return {
        Order: state.totalOrder,
        nama: state.nama,
        loading: state.isLoading
    }
}

const getActionRedux = (dispatch) => {
    return {
        gantiNama: () => dispatch(valueChange()),
        register: (data) => dispatch(registerFirebase(data))
    }
}

export default connect(getStateRedux, getActionRedux)(Register);
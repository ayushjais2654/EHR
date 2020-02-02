import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {TOKEN_PATIENT} from "../globalConstants";
import PatientLayout from "./index";
import './PatientLogin.css';
import "./patientRegister"
import axios from 'axios';

class PatientLogin extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem(TOKEN_PATIENT);
        let loggedIn = true;
        if (token === null) {
            loggedIn = false;
        }

        this.state = {
            username: "jhfsfdfjsfnj",
            password: "",
            loggedIn,
            register: false
        }
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitForm = async (event) => {
        event.preventDefault();
        const patientCredentials = {
            username: this.state.username,
            password: this.state.password
        };

        // Verification of credentials from composer
        let response = await axios.get(`http://localhost:3001/api/Patient/${this.state.username}`);
        if(response === undefined){
            alert("Invalid Credentials");
        }
        else{
            if(this.state.password === response.data.password){
                    localStorage.setItem(TOKEN_PATIENT, "hredgjkljggdfr");
                    this.setState({loggedIn: true});
                }
            else {
                alert("Invalid Credentials");
            }
        }
    };

    componentDidMount() {
    }

    handleRegister() {
        this.setState({
            register:true
        });
            
    }
    render() {
        if (this.state.loggedIn === true) {
            return <PatientLayout username={this.state.username}/>;
        }

        if (this.state.register === true) {
            return <Redirect to='/patientRegister'/>
        }
        console.log(this);
        return (
           
            <div>
                {/*<form onSubmit={this.submitForm}>*/}
                {/*    Username : <input type="text" name="username" value={this.state.username}*/}
                {/*                      onChange={this.handleChange} required/> <br/><br/>*/}
                {/*    Password : <input type="password" name="password" value={this.state.password}*/}
                {/*                      onChange={this.handleChange} required/> <br/> <br/>*/}
                {/*    <input type="submit" value="Submit"/>*/}
                {/*</form>*/}
                <div className="cont" id="loginbg">
                    <div className="form sign-in" id="loginForm"><br /><br /><br />  
                        <h2>Welcome back,</h2>
                        <label>
                            <span>Email</span>
                            <input id="patientLogin" type="email" onChange={this.handleChange} name="username"/>
                        </label><br/>
                        <label>
                            <span>Password</span>
                            <input id="patientLogin" type="password" onChange={this.handleChange} name="password"/>
                        </label><br/><br/>
                        <button type="submit" className="btn btn-danger text-white" onClick={this.submitForm}>Sign In</button>
                        <br/><br/>
                        <button type="submit" className="btn btn-danger text-white" href='/patientRegister'> Sign Up</button>
                    </div>
                    <div className="sub-cont">
                        <div className="img">
                            <div className="img__text m--up">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PatientLogin;

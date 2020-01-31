import React, {Component} from 'react';
import axios from 'axios';
import {DOCTOR_LOGIN} from './constants';
import DoctorLayout from "./index";
import {TOKEN_DOCTOR} from "../globalConstants";

class DoctorLogin extends Component {

    constructor(props) {
        super(props);

        const token = localStorage.getItem(TOKEN_DOCTOR);
        let loggedIn = true;
        if (token === null) {
            loggedIn = false;
        }

        this.state = {
            username: "",
            password: "",
            loggedIn
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitForm = async (event) => {
        event.preventDefault();
        const doctorCredentials = {
            username: this.state.username,
            password: this.state.password
        };

       // Verification of credentials from composer

        if(true) {
            localStorage.setItem(TOKEN_DOCTOR, "hredgjkljggdfr");
            this.setState({loggedIn: true});
        }
        else{
            alert("Invalid credentials");
        }
    };



    render() {
        if (this.state.loggedIn === true) {
            return <DoctorLayout username={this.state.username} />;
        }

        return (
            <div>
                <form onSubmit={this.submitForm}>
                    Username : <input type="text" name = "username" value = {this.state.username} onChange={this.handleChange} required /> <br/><br/>
                    Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required/> <br/> <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default DoctorLogin;

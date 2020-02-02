import React, {Component} from 'react';
import {TOKEN_HOSPITAL} from "../globalConstants";
import HospitalLayout from "./index";
import "../patient/PatientLogin.css"

class HospitalLogin extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem(TOKEN_HOSPITAL);
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
        const hospitalCredentials = {
            username: this.state.username,
            password: this.state.password
        };

        // Verification of credentials from composer

        if (true) {
            localStorage.setItem(TOKEN_HOSPITAL, "hredgjkljggdfr");
            this.setState({loggedIn: true});
        } else {
            alert("Invalid credentials");
        }
    };

    render() {
        if (this.state.loggedIn === true) {
            return <HospitalLayout username={this.state.username}/>;
        }

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
                            <input id="patientLogin" type="email" />
                        </label><br />
                        <label>
                            <span>Password</span>
                            <input id="patientLogin" type="password" />
                        </label><br /><br />
                        <button type="submit" class="btn btn-danger text-white" onClick="">Sign In</button>
                        <br /><br />
                        <button type="submit" class="btn btn-danger text-white" onClick="/">Sign Up</button>
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

export default HospitalLogin;

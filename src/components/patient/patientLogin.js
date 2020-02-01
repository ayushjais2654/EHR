import React, {Component} from 'react';
import {TOKEN_PATIENT} from "../globalConstants";
import PatientLayout from "./index";
import './PatientLogin.css';

class PatientLogin extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem(TOKEN_PATIENT);
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
        const patientCredentials = {
            username: this.state.username,
            password: this.state.password
        };

        // Verification of credentials from composer

        if (true) {
            localStorage.setItem(TOKEN_PATIENT, "hredgjkljggdfr");
            this.setState({loggedIn: true});
        } else {
            alert("Invalid credentials");
        }
    };

    componentDidMount() {
        document.querySelector('.img__btn').addEventListener('click', function () {
            document.querySelector('.cont').classList.toggle('s--signup');
        });
    }

    render() {
        if (this.state.loggedIn === true) {
            return <PatientLayout username={this.state.username}/>;
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
                <div className="cont">
                    <div className="form sign-in">
                        <h2>Welcome back,</h2>
                        <label>
                            <span>Email</span>
                            <input type="email"/>
                        </label>
                        <label>
                            <span>Password</span>
                            <input type="password"/>
                        </label>
                        <p className="forgot-pass">Forgot password?</p>
                        <button type="button" className="submit">Sign In</button>
                    </div>
                    <div className="sub-cont">
                        <div className="img">
                            <div className="img__text m--up">
                                <h2>New here?</h2>
                                <p>Sign up and discover great amount of new opportunities!</p>
                            </div>
                            <div className="img__text m--in">
                                <h2>One of us?</h2>
                                <p>If you already has an account, just sign in. We've missed you!</p>
                            </div>
                            <div className="img__btn"
                                 onClick="document.querySelector('.cont').classList.toggle('s--signup');">
                                <span className="m--up">Sign Up</span>
                                <span className="m--in">Sign In</span>
                            </div>
                        </div>
                        <div className="form sign-up">
                            <h2>Time to feel like home,</h2>
                            <label>
                                <span>Email</span>
                                <input type="email"/>
                            </label>
                            <label>
                                <span>Name</span>
                                <input type="text"/>
                            </label>
                            <label>
                                <span>Pin Code</span>
                                <input type="text"/>
                            </label>
                            <label>
                                <span>Street</span>
                                <input type="text"/>
                            </label>
                            <label>
                                <span>City</span>
                                <input type="text"/>
                            </label>
                            <label>
                                <span>Country</span>
                                <input type="text"/>
                            </label>
                            <label>
                                <span>Blood Group</span>
                                <input type="text"/>
                            </label>
                            <label>
                                <span>Contact Number</span>
                                <input type="text"/>
                            </label>
                            <label>
                                <span>Password</span>
                                <input type="password"/>
                            </label>
                            <button type="button" className="submit">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PatientLogin;

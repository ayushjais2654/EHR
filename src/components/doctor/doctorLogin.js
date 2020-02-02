import React, {Component} from 'react';
import axios from 'axios';
import {DOCTOR_LOGIN_API} from './constants';
import DoctorLayout from "./index";
import { TOKEN_DOCTOR } from "../globalConstants";
import "../patient/PatientLogin.css"

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

        let response = await axios.get(`http://localhost:3001/api/Doctor/${this.state.username}`);
        if (response === undefined) {
            alert("Invalid Credentials");
        } else {
            if (this.state.password === response.data.password) {
                localStorage.setItem(TOKEN_DOCTOR, "hredgjkljggdfr");
                this.setState({loggedIn: true});
            } else {
                alert("Invalid Credentials");
            }
        }
        ;


        render()
        {
            if (this.state.loggedIn === true) {
                return <DoctorLayout username={this.state.username}/>;
            }

            return (
                <div>

                    <div className="cont" id="loginbg">
                        <div className="form sign-in" id="loginForm"><br/><br/><br/>
                            <h2>Welcome back,</h2>
                            <label>
                                <span>Email</span>
                                <input id="patientLogin" type="email" name="username" onClick={this.handleChange}/>
                            </label><br/>
                            <label>
                                <span>Password</span>
                                <input id="patientLogin" type="password" name="password" onClick={this.handleChange}/>
                            </label><br/><br/>
                            <button type="submit" class="btn btn-danger text-white" onClick="">Sign In</button>
                            <br/><br/>
                            <button type="submit" class="btn btn-danger text-white" onClick="">Sign Up</button>
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
}

export default DoctorLogin;

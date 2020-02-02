import React, {Component} from 'react';
import {TOKEN_PATIENT} from "../globalConstants";
import PatientLayout from "./index";
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

    render() {
        if (this.state.loggedIn === true) {
            return <PatientLayout username={this.state.username}/>;
        }

        return (
            <div>
                <form onSubmit={this.submitForm}>
                    Username : <input type="text" name="username" value={this.state.username}
                                      onChange={this.handleChange} required/> <br/><br/>
                    Password : <input type="password" name="password" value={this.state.password}
                                      onChange={this.handleChange} required/> <br/> <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default PatientLogin;

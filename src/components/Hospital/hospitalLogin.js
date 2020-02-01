import React, {Component} from 'react';
import {TOKEN_HOSPITAL} from "../globalConstants";
import HospitalLayout from "";

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
            return <HopitalLayout username={this.state.username}/>;
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

export default HospitalLogin;

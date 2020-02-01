import React, {Component} from 'react';
import {TOKEN_DOCTOR, TOKEN_HOSPITAL, TOKEN_PATIENT} from "./globalConstants";
import {Link} from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tokenDoctor: localStorage.getItem(TOKEN_DOCTOR),
            tokenHospital: localStorage.getItem(TOKEN_HOSPITAL),
            tokenPatient: localStorage.getItem(TOKEN_PATIENT)
        }
    }

    render() {

        /*
            redirect to corresponding actor home page
         */
        return (
            <div>
                <h1> Welcome to the Home Page .... </h1>
                <Link to="/doctorLogin"> Doctor Login</Link> <br/><br/>
                <Link to="/doctorRegister"> Doctor Register</Link> <br/><br/>

                <Link to="/patientHome"> Patient Home</Link> <br/><br/>
                <Link to="/patientLogin"> Patient Login</Link> <br/><br/>
                <Link to="/patientRegister"> Patient Register</Link> <br/><br/>

            </div>
        );
    }
}

export default Home;

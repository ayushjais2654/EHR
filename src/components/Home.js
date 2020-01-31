import React, {Component} from 'react';
import {TOKEN_DOCTOR, TOKEN_HOSPITAL, TOKEN_PATIENT} from "./globalConstants";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tokenDoctor : localStorage.getItem(TOKEN_DOCTOR),
            tokenHospital : localStorage.getItem(TOKEN_HOSPITAL),
            tokenPatient : localStorage.getItem(TOKEN_PATIENT)
        }
    }

    render() {

        /*
            redirect to corresponding actor home page
         */
        return (
            <div>

            </div>
        );
    }
}

export default Home;

import React, {Component} from 'react';
import axios from 'axios';

import {PATIENT_DETAILS} from './constants';

class PatientDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount = async () => {
        let response = await axios.post(PATIENT_DETAILS, this.props.patientId);
        this.setState({

        });
    };
    render(){
        return(
            <div>

            </div>
        );
    }
}
export default PatientDetails;

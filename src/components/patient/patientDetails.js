import React, {Component} from 'react';
import axios from "axios";
import {PATIENT_DETAILS} from "./constants";

class PatientDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latestDoctorAllocated : null
        };
    }
    async componentDidMount() {
        try {
            setInterval(async () => {
                const res = await axios.post(PATIENT_DETAILS, this.props.patientId);
                this.setState({
                    latestDoctorAllocated : res.name   // Name should be taken from Api call
                })
            }, 2000);
        } catch(e) {
            console.log(e);
        }
    }
    render(){
        return(
            <div>

            </div>
        );
    }
}

export default PatientDetails;

import React, {Component} from 'react';
import Home from "../Home";
import axios from "axios";
import {PATIENT_REGISTER_API} from "./constants";

class PatientRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /*
                attributed of doctor
             */
            isRegistered : false
        }
    }

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitForm = async (event) => {

        // event.preventDefault();
        /*
             Basic Validation
         */

        /*
             Register in blockchain using api.
         */
        let response = await axios.post(PATIENT_REGISTER_API, this.state);
        alert(response.data);
        if(response.data === "Candidate is successfully registered .."){
            this.setState({
                isRegistered : true
            });
        }
    };

    render() {
        if(this.state.isRegistered === true){
            return <Home/>;
        }

        return (
            <div>
                <h1> Welcome to Patient Registration Page .. </h1>
                <form onSubmit={this.submitForm}>


                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}
function validateName(name) {

    let valid = true;
    for (let i = 0; i < name.length; i++) {
        if (!(name[i] >= 'a' && name[i] <= 'z') && !(name[i] >= 'A' && name[i] <= 'Z')) {
            valid = false;
            break;
        }
    }
    return valid;
}

function validateMobileNo(number) {
    let valid = true;
    if(number.length !== 10)
        valid = false;
    if( !(number[0] === '9' || number[0] === '8' || number[0] === '7' || number[0] === '6')) {
        valid = false;
    }
    return valid;
}
export default PatientRegister;

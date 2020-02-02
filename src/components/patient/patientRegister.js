import React, {Component} from 'react';
import Home from "../Home";
import './patientRegister.css';
import axios from "axios";
import {Redirect} from "react-router-dom";

class PatientRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            /*
                attributed of doctor
             */
            name : "fjifb",
            emailId : "jhfsfdfjsfnj",
            password : "fewmklfmewf",
            pinCode : "sdnkn",
            street : "fkgner",
            country : "frnfkrge",
            bloodGroup : "fenfkjer",
            mobNo : "916151",
            isRegistered : false
        };
    }

    handleChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        });
    };

    submitForm = async (event) => {

        event.preventDefault();
        const patientDetails = {
            "$class": "org.electronic.healthcare.AddNewPatient",
            "emailId": this.state.emailId,
            "name": this.state.name,
            "password": this.state.password,
            "address": {
                "$class": "org.electronic.healthcare.IndiaAddress",
                "pincode": this.state.pinCode,
                "street": this.state.street,
                "city": this.state.city,
                "country": this.state.country
            },
            "bloodGroup": this.state.bloodGroup,
            "contactNumber": this.state.mobNo
        };
        /*
             Register in blockchain using api.
         */
        let response  = await axios.post(`http://localhost:3001/api/AddNewPatient`, patientDetails).then(null , error => {
            console.log(error.response.status);
            if(error.response.status === 500){
                alert("Patient already registered! Email already exists");
            }
        });

        if(response !== undefined) {
            alert("You are successfully registered");
            this.setState({
                isRegistered: true
            });
        }
    };

    render() {
        if(this.state.isRegistered === true){
            return <Redirect to='/'/>;
        }

        return (
            <div>
                <div id = "patientRegister">
                    <div class="main-w3layouts wrapper">
                        <h1>REGISTER</h1>
                        <div class="main-agileinfo">
                            <div class="agileits-top">
                                <form onSubmit={this.submitForm} id = "patientRegisterForm">
                                    NAME : <input class="text" type="text" name="username" placeholder="Username" />
                                    EMAIL : <input class="text" type="email" name="email" placeholder="EMail" />
                                    PASSWORD : <input class="text" type="password" name="password" placeholder="Password" />
                                    PIN CODE : <input class="text" type="text" name="street" placeholder="Street" />
                                    COUNTRY : <input class="text" type="text" name="country" placeholder="Country" />
                                    BLOOD GROUP : <input class="text" type="text" name="bloodGroup" placeholder="blood group" />
                                    MOBILE NUMBER : <input class="text" type="text" name="mobNo" placeholder="Mobile Number" />
                                    <div class="wthree-text">
                                        <label class="anim">
                                            <input type="checkbox" class="checkbox" />
                                            <span>I Agree To The Terms & Conditions</span>
                                        </label>
                                        <div class="clear"> </div>
                                    </div>
                                    <input type="submit" value="REGISTER" />
                                </form>
                                <p>Don't have an Account? <a href="/patientLogin"> Login Now!</a></p>
                            </div>
                        </div>
                        <ul class="colorlib-bubbles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                
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

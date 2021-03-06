import React, {Component} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Home from "../Home";
import {DOCTOR_REGISTER_API} from "./constants";

class DoctorRegister extends Component {

    constructor(props) {
        super(props);
        this.state = {
            /*
                attributed of doctor
             */
            isRegistered : false,
            name : null,
            email : null,
            password : null,
            pinCode : null,
            street : null,
            country : null,
            qualification : null,
            consultancyFee : 0,
            currentHospital : null,
            mobileNumber : 0
        }
    }

    render() {

        if(this.state.isRegistered === true){
            return <Redirect to='/'/>;
        }
        return (
            <div>
                <div id="patientRegister">
                    <div class="main-w3layouts wrapper">
                        <h1>REGISTER</h1>
                        <div class="main-agileinfo">
                            <div class="agileits-top">
                                <form onSubmit={this.submitForm} id="patientRegisterForm">
                                    NAME : <input class="text" type="text" name="name" placeholder="Username" onChange={this.handleChange}/>
                                    EMAIL : <input class="text" type="email" name="email" placeholder="EMail" onChange={this.handleChange}/>
                                    PASSWORD : <input class="text" type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                                    PIN CODE : <input class="text" type="text" name="pinCode" placeholder="PinCode" onChange={this.handleChange}/>
                                    STREET : <input class="text" type="text" name="street" placeholder="Street" onChange={this.handleChange}/>
                                    COUNTRY : <input class="text" type="text" name="country" placeholder="Country" onChange={this.handleChange}/>
                                    QUALIFICATION : <input class="text" type="text" name="qualification" placeholder="Qualifiaction" onChange={this.handleChange}/>
                                    CONSULTANCY FEE : <input class="text" type="text" name="consultancyFee" placeholder="Consulatation fees" onChange={this.handleChange}/>
                                    CURRENT HOSPITAL : <input class="text" type="text" name="currentHospital" placeholder="Hsopital" onChange={this.handleChange}/>
                                    MOBILE NUMBER : <input class="text" type="text" name="mobileNumber" placeholder="Mobile Number" onChange={this.handleChange}/>
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

export default DoctorRegister;

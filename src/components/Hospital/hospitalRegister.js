import React, {Component} from 'react';
import Home from "../Home";
import axios from "axios";
import {HOSPITAL_REGISTER_API} from "./constants";

class HospitalRegister extends Component {
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
        let response = await axios.post(HOSPITAL_REGISTER_API, this.state);
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
                <div id="patientRegister">
                    <div class="main-w3layouts wrapper">
                        <h1>REGISTER</h1>
                        <div class="main-agileinfo">
                            <div class="agileits-top">
                                <form onSubmit={this.submitForm} id="patientRegisterForm">
                                    NAME : <input class="text" type="text" name="username" placeholder="Username" />
                                    EMAIL : <input class="text" type="email" name="email" placeholder="EMail" />
                                    PASSWORD : <input class="text" type="password" name="password" placeholder="Password" />
                                    STREET : <input class="text" type="text" name="street" placeholder="Street" />
                                    PIN CODE : <input class="text" type="text" name="pincode" placeholder="PinCode" />
                                    CITY : <input class="text" type="text" name="city" placeholder="City" />
                                    COUNTRY : <input class="text" type="text" name="country" placeholder="Country" />
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
export default HospitalRegister;

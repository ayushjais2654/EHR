import React, {Component} from 'react';
import './PatientLayoutCss.css';
import {Button} from "react-bootstrap";
import {TOKEN_PATIENT} from "../globalConstants";
import {Link, Redirect} from "react-router-dom";
import axios from 'axios';

class PatientLayout extends Component {

    constructor(props) {
        super(props);
        const token = localStorage.getItem(TOKEN_PATIENT);
        let loggedIn = true;
        if(token == null){
            loggedIn = false;
        }
        this.state = {
            loggedIn,
            reports : [],
            name : "fjifb",
            emailId : "jhfjffnj",
            password : "fewmklfmewf",
            pinCode : "sdnkn",
            street : "fkgner",
            country : "frnfkrge",
            bloodGroup : "fenfkjer",
            mobNo : "916151",
        }
    }
    handleAboutMeClicked = () => {
        console.log("About me clicked");
        this.setState({
            isAboutMeClicked : true
        });
    };

    handleNewAppointmentClicked  = () => {

    };
    componentDidMount = async () => {
        let response = await axios.get(`http://localhost:3001/api/Patient/${this.props.username}`);
        console.log(response.data.emailId);
        console.log(response.data.address.city);
        let reports = await axios.get(`http://localhost:3001/api/Report?filter=%7B%22patient%22%3A%20%22resource%3Aorg.electronic.healthcare.Patient%23
        ${this.props.username}%22%7D`);
        console.log(reports.data);

        this.setState({
            name : response.data.name,
            emailId : response.data.emailId,
            password : response.data.password,
            pinCode : response.data.address.pincode,
            street : response.data.address.street,
            country : response.data.address.country,
            bloodGroup : response.data.bloodGroup,
            mobNo : response.data.contactNumber,
            reports : reports
        });

    };

    signOut = (event) =>{
        this.setState({
            loggedIn : false
        });
        localStorage.removeItem(TOKEN_PATIENT);
    };

    render(){

        if(this.state.loggedIn === false){
            return <Redirect to='/'/>;
        }

        return (
          <div>
                <h1> Hey friend</h1>
                <Link to="/" onClick={this.signOut}> SignOut </Link>
          </div>
        );
    }
}

export default PatientLayout;

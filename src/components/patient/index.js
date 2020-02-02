import React, {Component} from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
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
                <form id="form1" runat="server">
                    <header role="banner">
                        <h1 id="patient">Patient Panel</h1>
                    </header>

                    <nav role='navigation' id = "patientIndex">
                        <ul className="main">
                            <li className="dashboard"><a href="#dashboard">Dashboard</a></li>
                            <br/><br/>
                            <li className="edit"><a href="#table_id">View Reports</a></li>
                            <br/>
                            <li className="write"><a href="#appintmentForm">New Appointment</a></li>
                            <br/>
                            <button className="dashboard" onClick={this.signOut}>SignOut</button>
                        </ul>
                    </nav>

                    <main role="main">
                        <div id="dashboard">
                            <section className="panel important">
                                <h2>PATIENT DASHBOARD</h2>
                            </section>
                        </div>

                        <div id="contract" runat="server">
                            <section className="panel important">
                                <h2>PREVIOUS REPORTS</h2>

                                <table id="table_id" className="display">
                                    <thead>
                                    <tr>
                                        <th>Report ID</th>
                                        <th>Doctor</th>
                                        <th>Date</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr data-toggle="modal" data-target="#myModal--specialPromo">
                                        <td>Row 1 Data 1</td>
                                        <td>Row 1 Data 2</td>
                                        <td>Row 1 Data 3</td>
                                    </tr>
                                    <div className="modal" id="myModal--specialPromo" tabIndex="-1" role="dialog"
                                         aria-labelledby="myModalLabel">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="close" data-dismiss="modal"
                                                            aria-label="Close"><span aria-hidden="true">&times;</span>
                                                    </button>
                                                    <h4 className="modal-titles" id="myModalLabel">DETAILED REPORT</h4>
                                                </div>
                                                <div className="modal-body">
                                                    <i className="fa fa fa-file-text-o fa-5x"></i>

                                                    <div className="jumbotron jumbotron-fluid">
                                                        <p>enter report description here</p>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-primary"
                                                            data-dismiss="modal">Close
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </tbody>
                                </table>
                            </section>

                            <section className="panel important">
                                <h2>CREATE NEW APPOINTMENT</h2>
                                <form id="appointmentForm">
                                    HOSPITAL :
                                    <select className="text">
                                        <option value="hospital1">Hospital 1</option>
                                    </select>

                                    DESCRIPTION: <textarea rows="5"/>

                                    <input type="submit" value="CREATE APPOINTMENT"/>
                                </form>
                            </section>
                        </div>
                    </main>
                </form>
                <Link to="/" onClick={this.signOut}> SignOut </Link>
            </div>
        );
    }
}

export default PatientLayout;

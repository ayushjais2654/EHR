import React, {Component} from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {Button} from "react-bootstrap";
import {TOKEN_HOSPITAL} from "../globalConstants";
import {Link, Redirect} from "react-router-dom";
import axios from 'axios';

class HospitalLayout extends Component {



    render(){

        // if(this.state.loggedIn === false){
        //     return <Redirect to='/'/>;
        // }

        return (
            <div>
                <form id="form1" runat="server">
                    <header role="banner">
                        <h1 id="patient">Hospital Panel</h1>
                    </header>

                    <nav role='navigation' id="patientIndex">
                        <ul className="main">
                            <li className="dashboard"><a href="#dashboard">Dashboard</a></li>
                            <br /><br />
                            <li className="edit"><a href="#table_id">View Doctors</a></li>
                            <br />
                            <li className="write"><a href="#appintmentForm">New Appointment</a></li>
                            <br />
                        </ul>
                    </nav>

                    <main role="main">
                        <div id="dashboard">
                            <section className="panel important">
                                <h2>HOSPITAL DASHBOARD</h2>
                            </section>
                        </div>

                        <div id="contract" runat="server">
                            <section className="panel important">
                                <h2>LIST OF DOCTORS</h2>

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
                                                        <h4 className="modal-titles" id="myModalLabel">DOCTOR INFO</h4>
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
                            <section class="panel important">

                                <h2>NEW PATIENT</h2>
                                        <div id="dvGridCandidate">

                                            <div class="card">
                                                <ul>
                                                    <li class="dropdown">
                                                        <input type="checkbox" />
                                                        <a href="#" data-toggle="dropdown">Dummy Patient</a>
                                                        <ul class="dropdown-menu">
                                                            <div class="inside-dropdown">
                                                                <div class="element">Hello world</div>
                                                                <div class="element">Hello world</div>
                                                                <div class="element">Hello world</div>
                                                                <div class="row mb-4">
                                                                    <div class="col text-center">
                                                                        <a href="#" class="btn btn-danger text-white" data-toggle="modal" data-target="#myModal--specialPromo">Add Report</a>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                            </section>
                            <section class="panel important">
                                <h2>NEW DOCTOR</h2>
                                <div id="dvGridCandidate">

                                    <div class="card">
                                        <ul>
                                            <li class="dropdown">
                                                <input type="checkbox" />
                                                <a href="#" data-toggle="dropdown">Dummy Patient</a>
                                                <ul class="dropdown-menu">
                                                    <div class="inside-dropdown">
                                                        <div class="element">Hello world</div>
                                                        <div class="element">Hello world</div>
                                                        <div class="element">Hello world</div>
                                                        <div class="row mb-4">
                                                            <div class="col text-center">
                                                                <a href="#" class="btn btn-danger text-white" data-toggle="modal" data-target="#myModal--specialPromo">Add Report</a>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </section>
                        </div>
                    </main>
                </form>
                <Link to="/" onClick={this.signOut}> SignOut </Link>
            </div>
        );
    }
}

export default HospitalLayout;

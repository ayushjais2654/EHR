import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import AboutMe from './aboutme';
import PatientList from './patientList';
import PatientDetails from './patientDetails';
import "./dashboardStyle.css"

class DoctorLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patientId : null,
            isAboutMeClicked : false,
            isNewPatientClicked : false,

        };
    }

    getPatientId = (patientId) => {
        this.setState({
            patientId:patientId
        });
    };

    handleAboutMeClick = () => {
        this.setState({
            isAboutMeClicked : true,
            isNewPatientClicked: false
        });
    };

    handleNewPatientClick = () => {
        this.setState({
            isAboutMeClicked : false,
            isNewPatientClicked: true
        });
    };

    render(){
        return(
          <div>
                <form id="form1" runat="server">
                    <header role="banner">
                        <h1 id="patient">Doctor Panel</h1>
                    </header>

                    <nav role='navigation' id="patientIndex">
                        <ul className="main">
                            <li className="dashboard"><a href="#dashboard">Dashboard</a></li>
                            <br /><br />
                            <li className="edit"><a href="#table_id">View Reports</a></li>
                            <br />
                            <li className="write"><a href="#appintmentForm">New Appointment</a></li>
                            <br />
                        </ul>
                    </nav>

                    <main role="main">
                        <div id="dashboard">
                            <section className="panel important">
                                <h2>DOCTOR DASHBOARD</h2>
                            </section>
                        </div>
                        <div id="myProf">
                            <section class="panel important">
                                <h2>My Profile</h2>
                                <div id="dvGridCandidate">

                                    <div class="card">
                                        <figure class="snip0057 red">
                                            <figcaption id="ab1">
                                                <h2>Doctor<span>Name</span></h2>
                                                <p>Degrees of doctor</p>
                                                <p>Degrees of doctor</p>
                                                <p>Degrees of doctor</p>
                                                <p>Degrees of doctor</p>
                                                <p>Degrees of doctor</p>
                                                <div class="icons"><a href="#"><i class="ion-ios-home"></i></a><a href="#"><i class="ion-ios-email"></i></a><a href="#"><i class="ion-ios-telephone"></i></a></div>
                                            </figcaption>
                                            <div class="image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_YngsyLN9hOd3UCNX_iqvRUTBuKIZqXTz8pLkGtmKPi-Iq62j" alt="sample3" /></div>
                                            <div class="position">Doctor ID</div>
                                        </figure>
                                    </div>
                                </div>

                            </section>
                        </div>

                        <div id="contract" runat="server">
                            <section className="panel important">
                                <h2>NEW PATIENTS</h2>

                                <div id="newPatients">
                                    <section class="panel important">
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
                            </section>
                        </div>
                    </main>
                </form>
          </div>

        );
    }

}

export default DoctorLayout;

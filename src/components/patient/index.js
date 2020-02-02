import React, {Component} from 'react';
import $ from 'jquery';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './PatientLayoutCss.css';

class PatientLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAboutMeClicked : false
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
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <form id="form1" runat="server">
                    <header role="banner">
                        <h1 id="patient">Patient Panel</h1>
                    </header>

                    <nav role='navigation'>
                        <ul className="main">
                            <li className="dashboard"><a href="#dashboard">Dashboard</a></li>
                            <br/><br/>
                            <li className="edit"><a href="#table_id">View Reports</a></li>
                            <br/>
                            <li className="write"><a href="#agendas">View Profile</a></li>
                            <br/>
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
            </div>
        );
    }
}

export default PatientLayout;

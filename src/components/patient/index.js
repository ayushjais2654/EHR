import React, {Component} from 'react';
import AboutMe from "../doctor/aboutme";
import PatientDetails from "./patientDetails";
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

    render(){
        return (
          <div>
              <button onClick = {this.handleAboutMeClicked}>
                  fndsknk
              </button>
              {this.state.isAboutMeClicked ? <AboutMe username = {this.props.username} /> : null }
              <button onClick = {this.handleNewAppointmentClicked}>
                  New Appointment
              </button>
              <PatientDetails patientId = {this.props.username}/>
              <form id="form1" runat="server">
                  <header role="banner">
                      <h1>Patient Panel</h1>

                  </header>

                  <nav role='navigation'>
                      <ul className="main">
                          <li className="dashboard"><a href="#dashboard">
                              <span onClick={this.handleAboutMeClicked}>
                                  Dashboard
                              </span>
                          </a></li>
                          <li className="edit"><a href="#table_id">View Reports</a></li>
                          <li className="write"><a href="#agendas">View Profile</a></li>
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
                                  <tr>
                                      <td>Row 1 Data 1</td>
                                      <td>Row 1 Data 2</td>
                                      <td>Row 1 Data 3</td>
                                  </tr>
                                  <tr>
                                      <td>Row 2 Data 1</td>
                                      <td>Row 2 Data 2</td>
                                      <td>Row 2 Data 3</td>
                                  </tr>
                                  <tr>
                                      <td>Row 1 Data 1</td>
                                      <td>Row 1 Data 2</td>
                                      <td>Row 1 Data 3</td>
                                  </tr>
                                  <tr>
                                      <td>Row 2 Data 1</td>
                                      <td>Row 2 Data 2</td>
                                      <td>Row 2 Data 3</td>
                                  </tr>
                                  <tr>
                                      <td>Row 1 Data 1</td>
                                      <td>Row 1 Data 2</td>
                                      <td>Row 1 Data 3</td>
                                  </tr>
                                  <tr>
                                      <td>Row 2 Data 1</td>
                                      <td>Row 2 Data 2</td>
                                      <td>Row 2 Data 3</td>
                                  </tr>
                                  <tr>
                                      <td>Row 1 Data 1</td>
                                      <td>Row 1 Data 2</td>
                                      <td>Row 1 Data 3</td>
                                  </tr>
                                  <tr>
                                      <td>Row 2 Data 1</td>
                                      <td>Row 2 Data 2</td>
                                      <td>Row 2 Data 3</td>
                                  </tr>
                                  <tr>
                                      <td>Row 1 Data 1</td>
                                      <td>Row 1 Data 2</td>
                                      <td>Row 1 Data 3</td>
                                  </tr>
                                  <tr>
                                      <td>Row 2 Data 1</td>
                                      <td>Row 2 Data 2</td>
                                      <td>Row 2 Data 3</td>
                                  </tr>
                                  </tbody>
                              </table>
                          </section>
                      </div>
                  </main>
              </form>

          </div>
        );
    }
}

export default PatientLayout;

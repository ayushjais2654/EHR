import React, {Component} from 'react';

import AboutMe from "../doctor/aboutme";
import PatientDetails from "./patientDetails";

class PatientLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAboutMeClicked : false
        }
    }
    handleAboutMeClicked = () => {
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
                  About Me
              </button>
              {this.state.isAboutMeClicked ? <AboutMe username = {this.props.username} /> : null }
              <button onClick = {this.handleNewAppointmentClicked}>
                  New Appointment
              </button>
              <PatientDetails patientId = {this.props.username}/>
          </div>
        );
    }
}

export default PatientLayout;

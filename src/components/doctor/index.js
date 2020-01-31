import React, {Component} from 'react';


import AboutMe from './aboutme';
import PatientList from './patientList';
import PatientDetails from './patientDetails';
import {TOKEN_DOCTOR} from "../globalConstants";
import {HOME_LINK}  from "../globalConstants";

class DoctorLayout extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem(TOKEN_DOCTOR);
        let loggedIn = true;
        if(token == null ){
            loggedIn = false;
        }
        this.state = {
            loggedIn,
            patientId : null,
            isAboutMeClicked : false
        };
    }

    handleChange = (event) => {
        this.setState({
            loggedIn : false
        });
        localStorage.removeItem(TOKEN_DOCTOR);
    };

    getPatientId = (patientId) => {
        this.setState({
            patientId:patientId
        });
    };

    render(){
        return(
          <div>
              <button>
                  About Me
              </button>
              {this.isAboutMeClicked ? <AboutMe username = {this.props.username}/> : null}
              <PatientList username = {this.props.username}/>
              {this.state.patientId === null ? null : <PatientDetails patientId = {this.state.patientId}/>}
              {/* eslint-disable-next-line react/jsx-no-undef */}
              <Link to={HOME_LINK} onClick={this.handleChange}> Logout </Link>

          </div>

        );
    }

}

export default DoctorLayout;

import React, {Component} from 'react';


import AboutMe from './aboutme';
import PatientList from './patientList';
import PatientDetails from './patientDetails';

/**
 *  @author : Ayush Jaiswal
 *  @Date : 19/12/2019
 */

class DoctorLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patientId : null,
            isAboutMeClicked : false
        };
    }

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
          </div>

        );
    }

}

export default DoctorLayout;

import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import AboutMe from './aboutme';
import PatientList from './patientList';
import PatientDetails from './patientDetails';


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
              <Container>
                  <Row>
                      <h1>
                          Doctor Panel
                      </h1>
                  </Row>
              </Container>
              <Container>
                      <Col style={{'backgroundColor': 'black'}} md={{ span: 3, offset: 0 }}>
                              <button type="button" onClick={this.handleAboutMeClick}>Profile</button>
                              <button type="button" onClick={this.handleNewPatientClick}>New Patient</button>
                      </Col>
                      <Col>
                          {this.state.isAboutMeClicked ? <AboutMe/> : null}
                      </Col>
                      <Col>
                          {this.state.isNewPatientClicked ? <div><h1>New Patient</h1></div> : null}
                      </Col>
              </Container>
          </div>

        );
    }

}

export default DoctorLayout;

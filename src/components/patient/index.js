import React, {Component} from 'react';
import $ from 'jquery';
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

    render(){
        return (
          <div>

          </div>
        );
    }
}

export default PatientLayout;

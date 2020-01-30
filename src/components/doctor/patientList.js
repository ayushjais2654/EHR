import React, {Component} from 'react';
import axios from 'axios';

import PATIENT_LIST from './constants';

class PatientList extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    async componentDidMount() {
        let response = await axios.post(PATIENT_LIST, this.props.username);
        this.setState({

        });
    }
    render(){
        return(
            <div>

            </div>
        );
    }

}

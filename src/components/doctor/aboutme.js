import React, {Component} from 'react';
import axios from 'axios';
import {ABOUT_ME} from './constants';


class AboutMe extends Component{
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount = async () => {
        let response = await axios.post(ABOUT_ME, this.props.username);
        this.setState({

        });
    };
    render(){
        return(
            <div>

            </div>
        );
    }

}

export default AboutMe;

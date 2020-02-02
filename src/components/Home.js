import React, {Component} from 'react';
import {TOKEN_DOCTOR, TOKEN_HOSPITAL, TOKEN_PATIENT} from "./globalConstants";
import {Link} from "react-router-dom";
import './Home.css';
import DoctorLogin from "./doctor/doctorLogin";
import PatientLayout from "./patient";
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tokenDoctor: localStorage.getItem(TOKEN_DOCTOR),
            tokenHospital: localStorage.getItem(TOKEN_HOSPITAL),
            tokenPatient: localStorage.getItem(TOKEN_PATIENT),
        }
    }

    componentDidMount() {
    }

    render() {
        if(this.state.tokenDoctor != null){
            return <Redirect to='/doctorHome'/>;
        }
        if(this.state.tokenPatient != null){
            return <Redirect to='/patientHome'/>;
        }
        // if(this.state.hospital === true){
        //     return <Redirect to='/hospitalHome'/>;
        // }
        // if(this.state.patient === true){
        //     return <PatientLayout/>;
        // }
        /*
            redirect to corresponding actor home page
         */
        return (
            <div>
                <section id="home" >
                    <header>
                        <div class="container">
                            <div class="left">
                                <a href="#" class="logo">chainCure</a>
                                <div class="hm-menu">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div class="right">
                                <nav id = "homeNav">
                                    <ul>
                                        <li id="homeNav1"><a href="">Home</a></li> <br/>
                                        <li id="homeNav2"><a href="">Patient</a></li>
                                        <li id="homeNav3"><a href="">Doctor</a></li>
                                        <li id="homeNav4"><a href="">Hospital</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </header>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <div class="hero-section">
                        <h1>CHAINCURE</h1>
                        <p>Blockchain solution for storing health records</p>
                    </div>
                    <a href="#about" class="btn-work">About Us</a>
                </section>
                <section id="about">
                    <div class="title">
                        <h2>About Us</h2>
                        <p>
                            Health records are classified information about the healthcare of the individuals and is needed to be shared to relevant people such as doctors, pharmacists and researchers . Sharing the  health records sometimes can cause issues which violates the privacy of the patients and hence utmost care should be taken while sharing these documents with others. Blockchain technology has the potential to revolutionize healthcare, placing the patient at the core of the healthcare ecosystem and enhancing the security, privacy, integrity, and interoperability of health data. The data exposed in the healthcare sector is prodigious, ubiquitous, and complicated. The interoperability of this data is a major concern.  Blockchain as a technology provides ways in which the transactions can be monitored and applications can be built with trust, transparency and proper accountability. This can be used to develop a decentralized system to share the EHR data with the hospitals ,  doctors , pharmaceutical companies , researchers and other interested parties. Using blockchain we propose a solution to share , store and manage EHR data. The proposed work aims to leverage the interoperability, integrity, and compliance of blockchain ,thereby, reducing a single point failure in case of centralized databases and providing a greater control over health data to the patients .
              
           </p>
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    </div>
                </section>   
            </div>
        );
    }
}

export default Home;

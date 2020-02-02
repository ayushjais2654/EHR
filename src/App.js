import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "./components/Home";
import DoctorLogin from "./components/doctor/doctorLogin";
import PatientLogin from "./components/patient/patientLogin";
import PatientLayout from "./components/patient";
import PatientRegister from "./components/patient/patientRegister";
import DoctorLayout from "./components/doctor";
import DoctorRegister from "./components/doctor/doctorRegister";
import HospitalLogin from "./components/Hospital/hospitalLogin";
import HospitalRegister from "./components/Hospital/hospitalRegister";
import HospitalLayout from "./components/Hospital/index";

import './App.css';

function App() {
  return (
    <div>
      <Router>
          <Route path="/" exact component={Home}/>
          <Route path="/doctorLogin" exact component={DoctorLogin}/>
          <Route path="/doctorHome" exact component={DoctorLayout}/>
          <Route path="/doctorRegister" exact component={DoctorRegister}/>

          <Route path="/PatientLogin" exact component={PatientLogin}/>
          <Route path="/patientHome" exact component={PatientLayout}/>
          <Route path="/patientRegister" exact component={PatientRegister}/>

          <Route path="/hospitalLogin" exact component={HospitalLogin}/>
              <Route path="/hospitalRegister" exact component={HospitalRegister} />
              <Route path="/hospitalHome" exact component={HospitalLayout} />

      </Router>
    </div>
  );
}

export default App;

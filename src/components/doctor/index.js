import React, {Component} from 'react';


import AboutMe from './aboutme';
import PatientList from './patientList';
import PatientDetails from './patientDetails';
import $ from 'jquery';
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

    handleAboutMeClick = () => {
        this.setState({
            isAboutMe : true
        });
    };

    render(){
        return(
          <div>
              {/*<button onClick={this.handleAboutMeClick}>*/}
              {/*    About Me*/}
              {/*</button>*/}
              {/*{this.isAboutMeClicked ? <AboutMe username = {this.props.username}/> : null}*/}
              {/*<PatientList username = {this.props.username}/>*/}
              {/*{this.state.patientId === null ? null : <PatientDetails patientId = {this.state.patientId}/>}*/}
              <form id="form1" onSubmit="callPopup();">
                  <header role="banner">
                      <h1>Doctor Panel</h1>
                      <ul className="utilities">
                          <li className="logout warn"><a runat="server" href="">Go Back</a></li>
                      </ul>
                  </header>

                  <nav role='navigation'>
                      <ul className="main">
                          <li className="dashboard"><a href="#dashboard">Dashboard</a></li>
                          <li className="write"><a href="#myProf">My Profile</a></li>
                          <li className="write"><a href="#newPatients">New Patients</a></li>
                      </ul>
                  </nav>

                  <main role="main">
                      <div id="dashboard">
                          <section className="panel important">
                              <h2>DOCTOR DASHBOARD</h2>
                          </section>
                      </div>

                      <div id="myProf">
                          <section className="panel important">
                              <h2>My Profile</h2>
                              <div id="dvGridCandidate" style="padding: 10px;">

                                  <div className="card" style="padding: 30px; ">
                                      <figure className="snip0057 red" style="margin: auto">
                                          <figcaption>
                                              <h2>Doctor<span>Name</span></h2>
                                              <p>Degrees of doctor</p>
                                              <p>Degrees of doctor</p>
                                              <p>Degrees of doctor</p>
                                              <p>Degrees of doctor</p>
                                              <p>Degrees of doctor</p>
                                              <div className="icons"><a href="#"><i className="ion-ios-home"></i></a><a
                                                  href="#"><i className="ion-ios-email"></i></a><a href="#"><i
                                                  className="ion-ios-telephone"></i></a></div>
                                          </figcaption>
                                          <div className="image"><img
                                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_YngsyLN9hOd3UCNX_iqvRUTBuKIZqXTz8pLkGtmKPi-Iq62j"
                                              alt="sample3"/></div>
                                          <div className="position">Doctor ID</div>
                                      </figure>
                                  </div>
                              </div>

                          </section>
                      </div>

                      <div id="newPatients">
                          <section className="panel important">
                              <h2>Patients</h2>
                              <div id="dvGridCandidate" style="padding: 10px; width: 450px">

                                  <div className="card" style="padding: 30px; ">
                                      <ul>
                                          <li className="dropdown">
                                              <input type="checkbox"/>
                                              <a href="#" data-toggle="dropdown">Dummy Patient</a>
                                              <ul className="dropdown-menu">
                                                  <div className="inside-dropdown"
                                                       style="padding: 20px; position: relative;">
                                                      <div className="element">Hello world</div>
                                                      <div className="element">Hello world</div>
                                                      <div className="element">Hello world</div>
                                                      <div className="row mb-4">
                                                          <div className="col text-center">
                                                              <a href="#" className="btn btn-danger text-white"
                                                                 data-toggle="modal" data-target="#abc">Add Report</a>
                                                          </div>
                                                      </div>

                                                  </div>
                                              </ul>
                                          </li>
                                      </ul>
                                  </div>
                              </div>

                          </section>
                      </div>

                      <div className="modal fade" id="abc" tabIndex="-1" role="dialog" aria-labelledby="abc"
                           aria-hidden="true">
                          <div className="modal-dialog" id="popupContact">
                              <div className="modal-content">
                                  <div className="modal-header">
                                      <h1 className="modal-title" id="myModalLabel">REPORT</h1>
                                  </div>
                                  <div className="modal-body">
                                      <div className="col s4">Description :</div>
                                      <div className="input-field col s8">
                  <textarea id="description" type="name" className="description" value="" name="diseaseDescription"
                            style="width: 500px; height: 100px; ">
                  </textarea>
                                      </div>
                                  </div>
                                  <div className="modal-footer">
                                      <button type="button" className="btn btn-danger text-white"
                                              data-dismiss="modal">Save changes
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>


                  </main>
              </form>

              <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
              <script type="text/javascript"
                      src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
          </div>

        );
    }

}

export default DoctorLayout;

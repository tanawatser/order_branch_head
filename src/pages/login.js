import React, { Component } from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation,

} from "mdbreact";
import './login.css';
import Logo from "../assets/jib-logo-blue.png";

import AuthService from '../component/authlogin'

export default class Loginbranch extends Component {
  constructor(props) {
    super(props);
    this.state={
      message: "",
      username: null,
      password: null,
      profile: {},
      chkBg: false
    }

    this.Auth = new AuthService();
    this.Onsubmit = this.Onsubmit.bind(this);
    this.setvalue = this.setvalue.bind(this);
    this.Logout = this.Logout.bind(this);
  }

  componentWillMount() {
    //window.removeEventListener("resize", this._handleWindowResize);
    if (this.Auth.loggedIn()) this.props.history.replace("/");
  }
  
  chktime() {
    let timeAfter30Mins = new Date(this.state.profile.exp * 1000);
    var limit = timeAfter30Mins.getDate() + '/' + (timeAfter30Mins.getMonth() + 1) + '/' + timeAfter30Mins.getFullYear() + ' เวลา ' + timeAfter30Mins.getHours() + ':' + timeAfter30Mins.getMinutes() + ':' + timeAfter30Mins.getSeconds() + ' น.';
    return (limit);
  }


  Onsubmit(e){
    e.preventDefault();
    if (
      this.state.username === null ||
      this.state.username === "" ||
      this.state.password === "" ||
      this.state.password === null
    ) {
      alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
    } else {
      this.Auth.login(this.state.username, this.state.password)
        .then(res => {
          if (res.accessapp === false) {
            alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
          } else {
            window.location.href='/'

            this.setState({ chkBg: true }, () => {
              console.group('Value login');
              console.log(this.state.chkBg);
              console.groupEnd();
            })
            // SET GO TO MAIN
          }
        })
        .catch(err => {
          alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
        });
    }
  }

  setvalue(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  Logout() {
    this.Auth.logout();
    window.location.reload();
  }

  render() {

    return (
        <div id="classicformpage" >
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation 
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <center>
                    <img className="img-logo" src={Logo} alt="" width="400px" />
                  </center>
                </MDBAnimation>
                <MDBCol md="6" xl="5" className="mb-4">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <MDBCard id="classic-card">
                      <MDBCardBody>
                        <form onSubmit={this.Onsubmit}>
                        <h3 className="text-center" style={{ color: "black" }}>
                          เข้าสู่ระบบ
                        </h3>
                        <hr className="hr-light" />
                        <MDBInput
                          name="username"
                          autoFocus
                          className="form-control"
                          label="รหัสผู้ใช้งาน"
                          icon="user"
                          type="text"
                          value={this.state.username}
                          onChange={this.setvalue}
                        />
                        <MDBInput
                          name="password"
                          className="form-control"
                          label="รหัสผ่าน"
                          icon="lock"
                          type="password"
                          value={this.state.password}
                          onChange={this.setvalue}
                        />
                        <div className="text-center mt-4 black-text">
                          <MDBBtn
                            type="submit"
                            color="blue-grey"
                          >
                            Log in
                          </MDBBtn>
                        </div>
                        </form>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

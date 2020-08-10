import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

import Login from "./pages/login";

import Auth from "./component/authlogin";
import Logo from "./assets/jib-logo-white2.png";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBFooter,
  MDBContainer,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdbreact";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.Auth = new Auth();
  }
  state = {
    isOpen: false,
  };
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <>
        <Router>
          {localStorage.getItem("access") ? (
            <div>
              <MDBNavbar color="cyan darken-1" dark expand="lg">
                <MDBNavbarBrand>
                  <img src={Logo} alt="" width="60px" />
                </MDBNavbarBrand>
                <MDBNavbarBrand>
                  <strong className="white-text">
                    Branch Order
                  </strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse
                  id="navbarCollapse3"
                  isOpen={this.state.isOpen}
                  navbar
                >
              
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <div style={{ color: "white" }}>
                        <img
                          className="rounded-circle"
                          src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
                          class="rounded-circle z-depth-0"
                          alt="avatar image"
                          height="40"
                        />
                      </div>
                    </MDBNavItem>
                    &nbsp;&nbsp;&nbsp;
                    <MDBNavItem>
                      <MDBNavLink to="#!">สวัสดี ,</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBDropdown>
                        <MDBDropdownToggle nav caret style={{ width: "220px" }}>
                          <span className="mr-2">
                            {this.Auth.getProfile().fullname}
                          </span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                          <MDBDropdownItem
                            onClick={() => {
                              alert("Op1");
                            }}
                          >
                            About
                          </MDBDropdownItem>
                          <MDBDropdownItem
                            onClick={() => {
                              this.Auth.logout();
                              window.location.reload();
                            }}
                          >
                            Logout
                          </MDBDropdownItem>
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBNavbar>
              

              <MDBNavbar 
            
                color="cyan darken-1"
                dark
                expand="sm"
                style={{ height: "auto" }}
                
              >
                <MDBCollapse 
                  id="navbarCollapse3"
                  isOpen={this.state.isOpen}
                ></MDBCollapse>
                <MDBNavbarNav  className="subnav">
                  <MDBNavItem >
                    <MDBNavLink to="/">หน้าหลัก</MDBNavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        <span className="mr-2">สาขา</span>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href="/order">
                          สั่งสินค้า
                        </MDBDropdownItem>
                        <MDBDropdownItem href="/list">
                          รายการสินค้าที่สั่ง
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        <span className="mr-2">จัดการ</span>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href="/listorder">
                          รายการสั่งซื้อสินค้า
                        </MDBDropdownItem>
                        <MDBDropdownItem href="/branch-limit">
                          จำกัดออเดอร์สาขา [Manage Branch Limit]
                        </MDBDropdownItem>
                        <MDBDropdownItem href="/product-limit">
                          จำกัดจำนวนสินค้า [Manage Product Limit]
                        </MDBDropdownItem>
                        <MDBDropdownItem href="/category">
                          จัดกลุ่มสินค้า [Manage Group Category]
                        </MDBDropdownItem>
                        <MDBDropdownItem href="/stock">
                          จัดการ Stock สาขา [Manage Stock Branch]
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>

                  <MDBNavItem>
                    <MDBDropdown>
                      <MDBDropdownToggle nav caret>
                        <span className="mr-2">ตั้งค่า</span>
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem href="/config">
                          สิทธ์ในการสั่งซื้อ [สาขา]
                        </MDBDropdownItem>
                        <MDBDropdownItem href="/time">
                          เวลาในการ [เปิด/ปิด] ระบบสั่งซื้อ
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBNavbar>
              <Routes />
            </div>
          ) : (
            <Login />
          )}
        </Router>
      </>
    );
  }
}

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./Routes";

import Login from './pages/login'

import Auth from './component/authlogin'
import Logo from './assets/jib-logo-white2.png'
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
  MDBContainer
} from "mdbreact";

export default class App extends Component {
  constructor(props){
    super(props);
    this.Auth = new Auth();
  }

  render(){
    return (
      <>
      <Router>
        {localStorage.getItem('access') ? (
        
        <div>
          <MDBNavbar color="cyan darken-1" dark expand="sm">
          <MDBNavbarBrand>
            <img src={Logo} alt="" width='60px' />
          </MDBNavbarBrand>
          <MDBNavbarBrand>
            <strong className="white-text">Branch Order [ ส่วนของจัดซื้อ ]</strong>
          </MDBNavbarBrand>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="#!">สวัสดี ,</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <div style={{color:'white'}}><MDBIcon icon="user"  size="3x"/></div>
              </MDBNavItem>
              <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav style={{width:'200px'}}>
                  <span className="mr-2" >{this.Auth.getProfile().fullname}</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem onClick={()=>{alert('Op1')}}>About</MDBDropdownItem>
                  <MDBDropdownItem onClick={()=>{
                    this.Auth.logout();
                    window.location.reload();
                    }}>Logout</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
             </MDBNavItem>
            </MDBNavbarNav>
        </MDBNavbar>
      <MDBNavbar color="cyan darken-1" dark expand='sm' style={{ height:'30px' }}>
        
          <MDBNavbarNav left>
          
            <MDBNavItem>
              <MDBNavLink to="/">หน้าหลัก</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">สาขา</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/order">สั่งสินค้า</MDBDropdownItem>
                  <MDBDropdownItem href="/list">รายการสินค้าที่สั่ง</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">จัดการ</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/listorder">รายการสั่งซื้อสินค้า</MDBDropdownItem>
                  <MDBDropdownItem href="/branch-limit">จำกัดออเดอร์สาขา [Manage Branch Limit]</MDBDropdownItem>
                  <MDBDropdownItem href="/product-limit">จำกัดจำนวนสินค้า [Manage Product Limit]</MDBDropdownItem>
                  <MDBDropdownItem href="/category">จัดกลุ่มสินค้า [Manage Group Category]</MDBDropdownItem>
                  <MDBDropdownItem href="/stock">จัดการ Stock สาขา [Manage Stock Branch]</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>

            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">ตั้งค่า</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/config">สิทธ์ในการสั่งซื้อ [สาขา]</MDBDropdownItem>
                  <MDBDropdownItem href="/time">เวลาในการ [เปิด/ปิด] ระบบสั่งซื้อ</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>


          </MDBNavbarNav>
      </MDBNavbar>

      <Routes />
      <MDBFooter color="cyan darken-1"
         style={{width:'100%', position:'fixed', bottom:'0px',marginTop:'auto'}}>
           <MDBContainer fluid className="text-center text-md-left"></MDBContainer>
           <div className="footer-copyright text-center py-3">
             <MDBContainer fluid>
               &copy; {new Date().getFullYear()} Copyright:{" "}
               <a href="https://www.jib.co.th/">JIB COMPUTER GROUP</a> All rights reserved
             </MDBContainer>
           </div>

         </MDBFooter>
      </div>
        
        ):(<Login />)}
      </Router>
    </>
    );
  }
}

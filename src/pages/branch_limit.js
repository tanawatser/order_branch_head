import React, { Component } from 'react';
import {
    MDBInput,
    MDBBtn
  } from "mdbreact";
  

import Table from './branch_limit_table'
export default class Order extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[
        { branch_id:18, product_id:'3008526218',product_name:'VGA (การ์ดแสดงผล) MSI GTX1660 VENTUS XS 6G OC ',product_type:'Graphic Card',product_count:8},
        { branch_id:25, product_id:'0199002871',product_name:'CPU (ซีพียู) AMD AM4 RYZEN9 3950X 3.5 GHz',product_type:'CPU',product_count:2},
        { branch_id:1000, product_id:'0201038090',product_name:'MAINBOARD (เมนบอร์ด) AM4 ASROCK B550 STEEL LEGEND',product_type:'Mainboard',product_count:3},
        { branch_id:524, product_id:'0320550472',product_name:'16GB (8GBx2) DDR4/3200 RAM PC (แรมพีซี) ',product_type:'RAM For PC',product_count:5},
        { branch_id:136, product_id:'2310392949',product_name:'POWER SUPPLY (อุปกรณ์จ่ายไฟ) ANTEC 650W ATOM B650 (80+ BRONZE)',product_type:'Power Supply',product_count:7},
      ]
    }

  }

  render(){
    return (
        <>
        <br/>
        <center>
        <h3>เพิ่มสินค้าภายใน Branch </h3>
     
            <tr>
                <td>
                    <MDBInput label="รหัสสินค้า" group type="text" success="right" outline/>
                </td>
                <td>
                    <select className="browser-default custom-select">
                        <option>เลือกสาขา</option>
                        <option value="1">121</option>
                        <option value="2">315</option>
                        <option value="3">416</option>
                    </select>
                </td>
                <td>
                    <MDBInput label="จำนวนในการสั่งสูงสุด" group type="number" success="right" outline/>
                </td>
                <td>
                    <MDBBtn color="success">เพิ่ม</MDBBtn>
                </td>
            </tr>
       <br/>
        </center>
        
        <Table data={this.state.data} />
        </>
    );
  }
}

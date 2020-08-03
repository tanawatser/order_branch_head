import React, { Component } from 'react';
import {
    MDBInput,
    MDBBtn
  } from "mdbreact";
  

import Table from './stock_branch_table'
export default class Stock extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[
        { branch_id:18, group_id:'3008526218',group_name:'A',qtystock:8},
        { branch_id:25, group_id:'0199002871',group_name:'B',qtystock:2},
        { branch_id:1000, group_id:'0201038090',group_name:'C',qtystock:3},
        { branch_id:524, group_id:'0320550472',group_name:'D',qtystock:5},
        { branch_id:136, group_id:'2310392949',group_name:'E',qtystock:7},
      ]
    }

  }

  render(){
    return (
        <>
        <br/>
        <center>
        <h3>เพิ่ม Stock Branch</h3>
     
            <tr>
                <td>
                    <MDBInput label="รหัสสาขา" group type="text" success="right" outline />
                </td>
                <td>
                    <MDBInput label="รหัสกลุ่ม" group type="text" success="right" outline/>
                </td>
                <td>
                    <MDBInput label="จำนวนที่มีทั้งหมด" group type="text" success="right" outline/>
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

import React, { Component } from "react";
import { MDBInput, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";

import Table from './category_table'
import GroupTable from "./group_table";
import { Container } from "@material-ui/core";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoad1: false,
      isLoad2: false,
      data: [],
      group: [],
      newGroup: "",
    };
    this.submitData = this.submitData.bind(this);
  }

  componentDidMount() {
    this.getData();
    this.getGroup();
  }

  getData() {
    fetch("http://172.18.9.55:3200/POB019")
      .then((res) => res.json())
      .then((re) => {
        this.setState({ isLoad1: true, data: re });
      })
      .catch((error) => console.log(error));
  }

  getGroup() {
    fetch("http://172.18.9.55:3200/GetGroup")
      .then((res) => res.json())
      .then((re) => {
        this.setState({ isLoad2: true, group: re });
      })
      .catch((error) => console.log(error));
  }

  submitData() {
    if (this.state.newGroup !== "") {
      fetch("http://172.18.9.55:3200/InsertGroup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name_Group: this.state.newGroup,
        }),
      })
        .then((res) => res.json())
        .then((re) => {
          // if(window.confirm('Success')) {
          if (re.status) {
            alert("เพิ่มกลุ่มสินค้าเรียบร้อย");
            window.location.reload();
          } else {
            alert("Error");
          }
        });
    } else {
      alert("Error");
    }
  }
  render() {
    if (!this.state.isLoad1 || !this.state.isLoad2) {
      return (
        <center>
          <h1>Loadding....</h1>
        </center>
      );
    } else {
      return (
        <>
      
        
      <MDBRow>
            <MDBCol>
              <center>
            

              <br />
          <h3>สร้างกลุ่มสินค้า</h3>
          <table>
            <tr>
              <th>
                <MDBInput
                  label="ชื่อกลุ่มสินค้า"
                  group type="text"
                  onChange={(e) => {
                    this.setState({ newGroup: e.target.value });
                  }}
                  value={this.state.newGroup}
                  success="right"
                  outline
                />
              </th>

              <th>
                <MDBBtn
                  type="submit"
                  value="submit"
                  color="success"
                  onClick={this.submitData}
                  style={{ height: "40px" }}
                > สร้าง </MDBBtn>
              </th>
            </tr>

          </table>
          </center>
          </MDBCol>

          <MDBCol> 
          {" "}
          </MDBCol>
          </MDBRow>
          <br />
                  
          <MDBRow>
            <MDBCol> 
            {" "}
              <GroupTable data={this.state.group} />
            </MDBCol>

            <MDBCol>
            {" "}
        
            </MDBCol>

          </MDBRow>
        </>
      );
    }
  }
}

import React, { Component } from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import JqxDateTimeInput from "jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput";
import "../Style/Settimestyle.css"
export default class Stock extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
      <center>

      <h1>Set time</h1>
        <table>
          <tr>
            <th>
              <label>วันที่เปิด</label>
              <JqxDateTimeInput width={320} height={25} />
              <br />
            </th>
            <th>
              <label>เวลาที่เปิด</label>
              <JqxDateTimeInput
                width={320}
                height={30}
                formatString={"T"}
                showTimeButton={true}
                showCalendarButton={false}
              />
              <br />
            </th>
          </tr>

          <tr>
            <th>
              <label>วันที่ปิด</label>
              <JqxDateTimeInput width={320} height={25} />
              <br />
            </th>
            <th>
              <label>เวลาที่ปิด</label>
              <JqxDateTimeInput
                width={320}
                height={30}
                formatString={"T"}
                showTimeButton={true}
                showCalendarButton={false}
              />
              <br />
            </th>
          </tr>
        </table>
       
        </center>
      </>
    );
  }
}

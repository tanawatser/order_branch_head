import React, { Component } from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import JqxDateTimeInput from "jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput";
import "../Style/Settimestyle.css";
export default class Stock extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>Set time</h1>
        <center>
          <div class="box-settime">
            <table> 
              <tr>
                <th>
                  {" "}
                  <label class="text-date">เปิดใช้งาน</label>
                </th>

                <th>
                  {" "}
                  <JqxDateTimeInput
                    width={200}
                    height={40}
                    textAlign={"center"}
                  />
                </th>

                <th>
                  <JqxDateTimeInput
                    width={200}
                    height={40}
                    formatString={"T"}
                    showTimeButton={true}
                    showCalendarButton={false}
                    textAlign={"center"}
                  />
                </th>
              </tr>

              <br />
              <tr>
                <th>
                  {" "}
                  <label class="text-date">ปิดใช้งาน</label>
                </th>

                <th>
                  {" "}
                  <JqxDateTimeInput
                    width={200}
                    height={40}
                    textAlign={"center"}
                  />
                </th>

                <th>
                  <JqxDateTimeInput
                    width={200}
                    height={40}
                    formatString={"T"}
                    showTimeButton={true}
                    showCalendarButton={false}
                    textAlign={"center"}
                  />
                </th>
              </tr>
              <br />
              <tr>
                <th>
                  <MDBBtn className="btn-time">ตกลง</MDBBtn>
                </th>
                
              </tr>

            </table>
          </div>
        </center>
      </>
    );
  }
}

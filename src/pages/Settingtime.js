import React, { Component, useState } from "react";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import "../Style/Settimestyle.css";
// import Settingtime from '../pages/'
import { MDBBtn } from "mdbreact";

export default function Settingtime() {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2020-08-10T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <br />
      <br />

      <div class="container">
        <Grid container justify="space-around">
          <label>เริ่มต้นการสั่งสินค้า</label>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="วันที่"
            format="dd/MM/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />

          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="เวลา"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </Grid>
      </div>

      <br />
      <br />
      <br />
      <br />

      <div class="container">
        <Grid container justify="space-around">
          <label>สิ้นสุดการสั่งสินค้า</label>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="วันที่"
            format="dd/MM/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />

          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="เวลา"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </Grid>
        <div class="btn-settime">
          <MDBBtn color="success">ยืนยัน</MDBBtn>
          <MDBBtn color="danger">ยกเลิก</MDBBtn>
        </div>
      </div>
    </MuiPickersUtilsProvider>
  );
}

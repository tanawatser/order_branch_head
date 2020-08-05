import React, { Component } from "react";
import JqxGrid, { jqx } from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";
import "../Style/Main.css";
import bgMain from "../assets/homepage.jpg";


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentWillMount() {
    setInterval(() => {
      this.setState({
        time: new Date().getHours() +':'+ new Date().getMinutes() +':'+ new Date().getSeconds(),
      });
    }, 1000);
  }

  render() {
    return (
      <>
        <div class="box-center">
      
          <table>
            <tr>
              <th class="welcome-home"> ยินดีต้อนรับเข้าสู่ระบบสั่งสินค้า </th>
              </tr>

              <tr>
              <th class="time-home"> เวลา {this.state.time.toString()} น. </th>
             </tr>
          </table>
        </div>
        <img className="img-main" src={bgMain} />
      </>
    );
  }
}

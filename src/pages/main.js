import React, { Component } from "react";
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";
import "../Style/Main.css"


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()}
  }
    
  currentTime()
  {
      this.setState ({
          time: new Date()
      })
}

componentWillMount()
{
  setInterval(()=>this.currentTime(),1000)
}

  render() {
    return (
      <>
      <div className="main-container">
      <h1>ยินดีต้อนรับเข้าสู่ระบบสั่งสินค้า</h1>
      <div className="clock" >
         {this.state.time.toLocaleTimeString()}
      </div>   
    {/* <img src={BG} /> */}
  </div>
    </>
    );
  }
}

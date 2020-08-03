import React, { Component } from 'react';

import Table from './product_limit_table'
export default class Order extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[
        { product_id:'3008526218',product_name:'VGA (การ์ดแสดงผล) MSI GTX1660 VENTUS XS 6G OC ',product_count:8},
        { product_id:'0199002871',product_name:'CPU (ซีพียู) AMD AM4 RYZEN9 3950X 3.5 GHz',product_count:2},
        { product_id:'0201038090',product_name:'MAINBOARD (เมนบอร์ด) AM4 ASROCK B550 STEEL LEGEND',product_count:3},
        { product_id:'0320550472',product_name:'16GB (8GBx2) DDR4/3200 RAM PC (แรมพีซี) ',product_count:5},
        { product_id:'2310392949',product_name:'POWER SUPPLY (อุปกรณ์จ่ายไฟ) ANTEC 650W ATOM B650 (80+ BRONZE)',product_count:7},
      ]
    }

  }

  render(){
    return (
        <>
        <Table data={this.state.data} />
        </>
    );
  }
}

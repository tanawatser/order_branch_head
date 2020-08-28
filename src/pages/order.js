import React, { Component } from 'react';

import Table from './order_table'
export default class Order extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[
        { branch_id:18, product_id:'3008526218',product_name:'VGA (การ์ดแสดงผล) MSI GTX1660 VENTUS XS 6G OC ',product_type:'Graphic Card',product_limit:10,product_stock:8},
        { branch_id:25, product_id:'0199002871',product_name:'CPU (ซีพียู) AMD AM4 RYZEN9 3950X 3.5 GHz',product_type:'CPU',product_limit:10,product_stock:2},
        { branch_id:1000, product_id:'0201038090',product_name:'MAINBOARD (เมนบอร์ด) AM4 ASROCK B550 STEEL LEGEND',product_type:'Mainboard',product_limit:10,product_stock:3},
        { branch_id:524, product_id:'0320550472',product_name:'16GB (8GBx2) DDR4/3200 RAM PC (แรมพีซี) ',product_type:'RAM For PC',product_limit:10,product_stock:5},
        { branch_id:136, product_id:'2310392949',product_name:'POWER SUPPLY (อุปกรณ์จ่ายไฟ) ANTEC 650W ATOM B650 (80+ BRONZE)',product_type:'Power Supply',product_limit:10,product_stock:7},
        { branch_id:18, product_id:'3008526218',product_name:'VGA (การ์ดแสดงผล) MSI GTX1660 VENTUS XS 6G OC ',product_type:'Graphic Card',product_limit:10,product_stock:8},
        { branch_id:18, product_id:'3008526218',product_name:'VGA (การ์ดแสดงผล) MSI GTX1660 VENTUS XS 6G OC ',product_type:'Graphic Card',product_limit:10,product_stock:8},
      ]
    }

  }

  render(){
    return (
      <>
      {/* <Tsx data={this.state.data} /> */}
      <Table data={this.state.data} />
      </>
    );
  }
}

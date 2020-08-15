import React, { Component } from 'react';
import Table from './list_table'

export default class Listorder extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[
        { pic:'https://img.advice.co.th/images_nas/pic_product4/A0126931/A0126931OK_BIG_1.jpg',product_id:'3008526218',product_name:'VGA (การ์ดแสดงผล) MSI GTX1660 VENTUS XS 6G OC ',product_type:'Graphic Card',product_buy:8,product_limit:10},
        { product_id:'0199002871',product_name:'CPU (ซีพียู) AMD AM4 RYZEN9 3950X 3.5 GHz',product_type:'CPU',product_buy:2,product_limit:5},
        { product_id:'0201038090',product_name:'MAINBOARD (เมนบอร์ด) AM4 ASROCK B550 STEEL LEGEND',product_type:'Mainboard',product_buy:3,product_limit:10},
        { product_id:'0320550472',product_name:'16GB (8GBx2) DDR4/3200 RAM PC (แรมพีซี) CORSAIR DOMINATOR PLATINUM RGB (WHITE) (CMT16GX4M2Z3200C16W) ',product_type:'RAM For PC',product_buy:5,product_limit:10},
        { product_id:'2310392949',product_name:'POWER SUPPLY (อุปกรณ์จ่ายไฟ) ANTEC 650W ATOM B650 (80+ BRONZE)',product_type:'Power Supply',product_buy:7,product_limit:7},
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

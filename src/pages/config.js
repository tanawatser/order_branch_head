import React, { Component } from 'react';

import Table from '../pages/config_table'
export default class Config extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[
        { branch_id:18,branch_name:'1',status:'เปิด'},
        { branch_id:25,branch_name:'2', status:'เปิด'},
        { branch_id:1000,branch_name:'3', status:'เปิด'},
        { branch_id:524,branch_name:'4', status:'เปิด'},
        { branch_id:136,branch_name:'5', status:'เปิด'},
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

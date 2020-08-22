import React, { Component } from 'react';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";

import '../Style/Configtable.css'

export default class ConfigTable extends Component {
  constructor(props){
    super(props);

    this.myGrid = React.createRef(JqxGrid);

    const source =
    {
        datafields: [
            { name:'branch_id', type:'string'},
            { name:'branch_name', type:'string'},
            { name:'status', type:'string'},
            { name:'product_type', type:'string'},
            { name:'product_count', type:'number'},
        ],
        datatype: 'array',
        localdata:this.props.data
    };
    this.state = {
        columns:[
            { text:'รหัสสาขา',datafield:'branch_id', width: '20%', align: 'center',cellsalign:'center',editable:false},
            { text:'ชื่อสาขา',datafield:'branch_name', width: '55%', align: 'center',cellsalign:'center',editable:false},
            // { text:'สถานะการใช้งาน',datafield:'status', width: '20%', align: 'center',cellsalign:'center',editable:false,sortable:false},
            {
              text: "สถานะการใช้งาน",
              datafield: "checkStatus",
         
              cellsrenderer: () => {
                return '<div class="box-toggle"><label class="switch"><input type="checkbox" id="togBtn"><div class="slider round"><!--ADDED HTML --><span class="on">เปิด</span><span class="off">ปิด</span><!--END--></div></label></div>';
              
              },
              width: "25%",
              editable: false,
              sortable: false,
              filterable: false,
              align: "center",
            },
            
      
        ],
        source: new jqx.dataAdapter(source),
        config:[]
    }
    this.onCellclick=this.onCellclick.bind(this)
  }

  onCellclick = (e) => {
    // if(e.args.datafield ==='check'){
     
    //   console.log(e.args.row.bounddata);
    //   let checkStatus = e.args.row.bounddata.status
    //   let newStatus = 'ปิด'
    //   if (checkStatus ==='เปิด') {
    //   this.myGrid.current.setcellvalue(e.args.rowindex,'status',newStatus);
      

    //   }else {
    //   let newStatus = 'เปิด'
    //   this.myGrid.current.setcellvalue(e.args.rowindex,'status',newStatus);

    //   }
  // }
  }
  
  render(){
    return (
      <>
      <center>
                <JqxGrid
                    ref={this.myGrid}
                    width='50%'
                    height="500px"
                    source={this.state.source}
                    pageable={true}
                    pagesize={20}
                    autoheight={false}
                    columns={this.state.columns}
                    theme="material"
                    editable={false}
                    enabletooltips={false}
                    selectionmode={'singlecell'}
                    editmode={'click'}
                    columnsresize={false}
                    sortable={true}
                    filterable={true}
                    showfilterrow={true}
                    onCellclick={this.onCellclick}
                    rowsheight={40}

                />
        </center>
      </>
    );
  }
}

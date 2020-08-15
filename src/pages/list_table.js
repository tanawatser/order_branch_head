import React, { Component } from 'react';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";

import "../Style/Orderstyle.css"

export default class List_table extends Component {
  constructor(props){
    super(props);
    this.myGrid = React.createRef(JqxGrid);

    const source =
    {
        datafields: [
            { name:'product_id', type:'string'},
            { name:'product_name', type:'string'},
            { name:'product_type', type:'string'},
            { name:'product_buy', type:'number'},
        ],
        datatype: 'array',
        localdata:this.props.data
    };
    this.state = {
        columns:[
          {
            text: "Image",
            datafield: "pic",
            cellsrenderer: () => {
              return '<div class="container"><div class="center"><button class="btn"><i class="fa fa-camera" aria-hidden="true"></i></button></div></div>';
             
            },width: "4%",
            editable: false,
            sortable: false,
            filterable: false,
            align: "center",},
            { text:'รหัสสินค้า',datafield:'product_id', width: '15%', align: 'center',cellsalign:'center',editable:false},
            { text:'ชื่อสินค้า',datafield:'product_name', width: '42%', align: 'center',cellsalign:'left',editable:false},
            { text:'ประเภทสินค้า',datafield:'product_type', width: '20%', align: 'center',cellsalign:'center',editable:false},
            { text:'จำนวนที่สั่งซื้อ',datafield:'product_buy', width: '15%', align: 'center',cellsalign:'center',editable:false,filterable: false},
            {text: "ลดจำนวนสินค้า",
            datafield: "del",
            cellsrenderer: () => {
              return '<div class="container"><div class="center"><button class="btn"><i class="fa fa-trash" aria-hidden="true"></i> </button></div><div>';
            },
            width: "4%",
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

    if(e.args.datafield==='del'){
      console.log(e.args);
      let oldvalue=e.args.row.bounddata.product_buy;
      
      if(oldvalue===1){

        let newvalue=oldvalue-1;
        this.myGrid.current.setcellvalue(e.args.rowindex,'product_buy',newvalue);
        alert('ลบรายการสินค้า')

      }else if(oldvalue>1){
        
        let newvalue=oldvalue-1;
        this.myGrid.current.setcellvalue(e.args.rowindex,'product_buy',newvalue);

      }

    }else if(e.args.datafield==='pic'){
      alert('PIC')
    }
    
  }
  render(){
    return (
      <>
      <center>
                <JqxGrid
                    ref={this.myGrid}
                    width='100%'
                    height="700px"
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

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
            datafield: "img",
            cellsrenderer: () => {
              return '<div class="container"><div class="center"><button class="btn" style="width:190px"><i class="fa fa-camera" aria-hidden="true"></i></button></div></div>';
             
            },width: "5%",
            editable: false,
            sortable: false,
            filterable: false,
            align: "center",},
            { text:'รหัสสินค้า',datafield:'product_id', width: '15%', align: 'center',cellsalign:'center',editable:false},
            { text:'ชื่อสินค้า',datafield:'product_name', width: '43%', align: 'center',cellsalign:'left',editable:false},
            { text:'ประเภทสินค้า',datafield:'product_type', width: '15%', align: 'center',cellsalign:'center',editable:false},
            { text:'จำนวนที่สั่งซื้อ',datafield:'product_buy', width: '10%', align: 'center',cellsalign:'center',editable:false,filterable: false},
            
          {text: "เพิ่มจำนวนสินค้า",
            datafield: "add",
            cellsrenderer: () => {
              return '<div class="container"><div class="center"><button class="btn"style="width:190px" ><i class="fa fa-plus-square" aria-hidden="true"></i> </button></div><div>';
            },
            width: "6%",
            editable: false,
            sortable: false,
            filterable: false,
            align: "center",
          },
          {text: "ลดจำนวนสินค้า",
            datafield: "del",
            cellsrenderer: () => {
              return '<div class="container"><div class="center"><button class="btn"style="width:190px" ><i class="fa fa-minus-square" aria-hidden="true"></i> </button></div><div>';
            },
            width: "6%",
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
      let delValue=e.args.row.bounddata.product_buy;
      
      if(delValue===0){

        let nullValue = delValue;
        this.myGrid.current.setcellvalue(e.args.rowindex,'product_buy',nullValue);
        alert('จำนวนสั่งซื้อเป็น 0')

      }else if(delValue){
        
        let nullValue=delValue-1;
        this.myGrid.current.setcellvalue(e.args.rowindex,'product_buy',nullValue);

      }
    }
    if (e.args.datafield==='add'){
      let addValue=e.args.row.bounddata.product_buy;

      if(addValue >= 0){
        let plusProduct = addValue+1
        this.myGrid.current.setcellvalue(e.args.rowindex,'product_buy',plusProduct);

      }else {
        alert('Not found error');
      }
  }
  if (e.args.datafield ==='img'){
alert('Image')
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

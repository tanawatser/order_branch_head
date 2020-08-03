import React, { Component } from 'react';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";

export default class Order_table extends Component {
  constructor(props){
    super(props);
    this.myGrid = React.createRef(JqxGrid);

    const source =
    {
        datafields: [
            { name:'branch_id', type:'string'},
            { name:'product_id', type:'string'},
            { name:'product_name', type:'string'},
            { name:'product_type', type:'string'},
            { name:'product_stock', type:'number'},
            { name: "product_limit", type: "number" },
     

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
              return '<div class="container"><div class="center"><button class="btn"><i class="fa fa-camera" aria-hidden="true"></i></button></div></div>';
              // <img style="margin-left: 5px;" height="60" width="50" src="https://img.advice.co.th/images_nas/advice_activity/201911011332092019.jpg" />
            },
            width: "5%",
            editable: false,
            sortable: false,
            filterable: false,
            align: "center",
          },
           
            { text:'รหัสสินค้า',datafield:'product_id', width: '15%', align: 'center',cellsalign:'center',editable:false},
            { text:'ชื่อสินค้า',datafield:'product_name', width: '35%', align: 'center',cellsalign:'left',editable:false},
            { text:'ประเภทสินค้า',datafield:'product_type', width: '15%', align: 'center',cellsalign:'center',editable:false},
            
            {
              text: "สินค้าในสต็อค",
              datafield: "product_stock",
              width: "15%",
              align: "center",
              cellsalign: "center",
              editable: false,
              filterable: false,
    
            },
            {
              text: "Product Limit",
              datafield: "product_limit",
              width: "10%",
              align: "center",
              cellsalign: "center",
              filterable: false,
              editable: false,
            },
            {
              text: "Buy",
              datafield: "buy",
         
              cellsrenderer: () => {
                return '<div class="container"><div class="center"><button class="btn"><i class="fa fa-shopping-cart" aria-hidden="true"></i></button></div><div>';
              },
              width: "5%",
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
    if(e.args.datafield==='buy'){
      alert('Buy');
      console.log(e.args.row.bounddata);

    }else if(e.args.datafield==='img'){

      alert('Image');

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

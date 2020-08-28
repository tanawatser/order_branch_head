import React, { Component } from 'react';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";
import "../Style/Orderstyle.css"

import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

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
            { name: 'product_limit', type: 'number' },
     
     

        ],
        datatype: 'array',
        localdata:this.props.data
    };
    this.state = {
      modal: false,
        columns:[
          {
            text: "Image",
            datafield: "img",
            cellsrenderer: () => {
              
                return '<div class="container"><div class="center"><button class="btn" style="width:190px"><i class="fa fa-camera" aria-hidden="true"></i></button></div></div>';
  
            },
            width: "5%",
            editable: false,
            sortable: false,
            filterable: false,
            align: "center",
            
          },
           
            { text:'รหัสสินค้า',datafield:'product_id', width: '15%', align: 'center',cellsalign:'center',editable:false},
            { text:'ชื่อสินค้า',datafield:'product_name', width: '40%', align: 'center',cellsalign:'left',editable:false},
            { text:'ประเภทสินค้า',datafield:'product_type', width: '15%', align: 'center',cellsalign:'center',editable:false},
            
            {
              text: "สินค้าในสต็อค",
              datafield: "product_stock",
              width: "10%",
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
                return '<div class="container"><div class="center"><button class="btn" style="width:190px"><i class="fa fa-shopping-cart" aria-hidden="true"></i></button></div><div>';
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
    this.toggle=this.toggle.bind(this)
  }

  toggle = (e) => {
    if (e.args.datafield==='img') {
      console.log(e.args.row.bounddata.img)
    this.setState({
      modal: !this.state.modal
    })
  }
}

  onCellclick = (e) => {
    if(e.args.datafield==='buy'){
      // alert('Buy');
      console.log(e.args.row.bounddata.product_stock);
      let buyProduct =e.args.row.bounddata.product_stock;

      if (buyProduct ===0) {
        let remainStock = buyProduct;
        this.myGrid.current.setcellvalue(e.args.rowindex,'product_stock',remainStock)
        alert('สินค้าหมด')
       
      } else if (buyProduct) {
        let remainStock = buyProduct-1
        this.myGrid.current.setcellvalue(e.args.rowindex,'product_stock',remainStock)
        
      }
    }

  }
  render(){
    return (
      <>

      
<MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
        <MDBModalBody>
          (...Content...)
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="primary">Save</MDBBtn>
          <MDBBtn color="danger" onClick={this.toggle}>Close</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
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
                    toggle={this.toggle}

                    rowsheight={40}

                />
        </center>
      </>
    );
  }
}

import React, { Component } from 'react';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

import "../Style/Branchlimittable.css"

export default class Table extends Component {
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
            { name:'product_count', type:'number'},
        ],
        datatype: 'array',
        localdata:this.props.data
    };
    this.state = {
      modal: false,
        columns:[
            { text:'รหัสสาขา',datafield:'branch_id', width: '10%', align: 'center',cellsalign:'center',editable:false},
            { text:'รหัสสินค้า',datafield:'product_id', width: '15%', align: 'center',cellsalign:'center',editable:false},
            { text:'ชื่อสินค้า',datafield:'product_name', width: '40%', align: 'center',cellsalign:'left',editable:false},
            { text:'ประเภทสินค้า',datafield:'product_type', width: '17%', align: 'center',cellsalign:'center',editable:false},
            { text:'สั่งได้สูงสุด / ชิ้น',datafield:'product_count', width: '10%', align: 'center',cellsalign:'center',editable:false},
            {
              text: "แก้ไข",
              datafield: "edit",
         
              cellsrenderer: () => {
                return '<div class="container"><div class="center"><button class="btn"><i class="fa fa-cogs" aria-hidden="true"></i></button></div><div>';
              },
              width: "4%",
              editable: false,
              sortable: false,
              filterable: false,
              align: "center",
            },
            {
              text: "ลบรายการ",
              datafield: "delete",
         
              cellsrenderer: () => {
                return '<div class="container"><div class="center"><button class="btn"><i class="fa fa-trash" aria-hidden="true"></i></button></div><div>';
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
    // this.deleteData = this.deleteData.bind(this);
  }

  onCellclick = (e) => {
    if(e.args.datafield==='edit'){
    // alert('edit');
    // console.log(e.args.row.bounddata);
    this.setState({
      modal: !this.state.modal
    });

    } else if(e.args.datafield==='delete'){

      this.setState({
        modal: !this.state.modal
      });
    }

    // deleteData=(d)=> {
    //   return () => {
    //     this.setState(prevState => ({
    //       columns: prevState.columns.filter(data => data.d !== d)
    //     }));
    //   };
    // }
  }
  
  render(){
    return (
      <>

<MDBModal isOpen={this.state.modal} onCellclick={this.onCellclick}>
        <MDBModalHeader onCellclick={this.onCellclick}>MDBModal title</MDBModalHeader>
        <MDBModalBody>
          (...Content...)
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="primary">Save</MDBBtn>
          <MDBBtn color="danger" onClick={this.onCellclick}>Close</MDBBtn>
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
            rowsheight={40}

                />
        </center>
      </>
    );
  }
}

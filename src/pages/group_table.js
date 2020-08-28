import React, { Component } from 'react';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";

import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

export default class GroupTable extends Component {
    constructor(props) {
        super(props)
        this.myGrid = React.createRef(JqxGrid);

        const source =
        {
            datafields: [
                { name:'groupcode', type:'string'},
                { name:'groupname', type:'string'},
            
            ],
            datatype: 'array',
            localdata:this.props.data,
    
        };
        this.state = {
            configData:[],
            popup: false,
            columns:[
            { text:'รหัสกลุ่มสินค้า',datafield:'groupcode', width: '10%', align: 'center',cellsalign:'center',editable:false},
            { text:'ชื่อกลุ่มสินค้า',datafield:'groupname', width: '71%', align: 'center',cellsalign:'center',editable:false},
            {
                text: "แก้ไขประเภท",
                datafield: "setting",
           
                cellsrenderer: () => {
                    
                  return '<div class="container"><div class="center"><button class="btn"}><i class="fa fa-wrench" aria-hidden="true"></i></button></div><div>';
                },
                width: "9%",
                editable: false,
                sortable: false,
                filterable: false,
                align: "center",
              },
            {
                text: "ลบกลุ่มสินค้า",
                datafield: "delete",
           
                cellsrenderer: () => {
                    
                  return '<div class="container"><div class="center"><button class="btn"}><i class="fa fa-trash" aria-hidden="true"></i></button></div><div>';
                },
                width: "10%",
                editable: false,
                sortable: false,
                filterable: false,
                align: "center",
              },
        ],
        
        source: new jqx.dataAdapter(source),
        config:[],
    }
   this.configFuncPopup = this.configFuncPopup.bind(this)
}

// config function 
configFuncPopup(e) {
    if(e.args.datafield ==='setting'){

        fetch("http://172.18.9.55:3200/POB019")
      .then((res) => res.json())
      .then((re) => {
        this.setState({ configData: re });
        console.log(re)
      })
      .catch((error) => console.log(error));
      
        this.setState({
            popup : true
            
          });





        // console.log(e.args.row.bounddata.groupcode)
        // alert(e.args.row.bounddata.groupcode)
        // window.open('http://172.18.9.42:3000/configtype','newwindow', 'width=700,height=500')
   
   
    }
  }

    render() {

        return (
            <> 
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
                    onCellclick={this.configFuncPopup}
                />

                <MDBModal isOpen={this.state.popup}>
                    <MDBModalHeader>แก้ไขประเภท</MDBModalHeader>

                    <MDBModalBody>
                    {/* {this.state.configData.map((data , key) => (
                        <div key={key}> 
                        <p>data : {data.cat_id}</p>
                        
                        
                        </div>
                    ))} */}
                    </MDBModalBody>

                    <MDBModalFooter>
                    <MDBBtn color="primary">Save</MDBBtn>
                    <MDBBtn color="danger" onClick={()=> {this.setState({popup:false})}}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>

            </>
        )
    }
}

import React, { Component } from 'react';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";

export default class Table extends Component {
  constructor(props){
    super(props);
    this.myGrid = React.createRef(JqxGrid);

    const source =
    {
        datafields: [
            { name:'branch_id', type:'string'},
            { name:'group_id', type:'string'},
            { name:'group_name', type:'string'},
            { name:'qtystock', type:'number'},
        ],
        datatype: 'array',
        localdata:this.props.data
    };
    this.state = {
        columns:[
            { text:'รหัสสาขา',datafield:'branch_id', width: '10%', align: 'center',cellsalign:'center',editable:false},
            { text:'รหัสกลุ่ม',datafield:'group_id', width: '22%', align: 'center',cellsalign:'center',editable:false},
            { text:'ชื่อกลุ่ม',datafield:'group_name', width: '40%', align: 'center',cellsalign:'left',editable:false},
            { text:'จำนวน',datafield:'qtystock', width: '20%', align: 'center',cellsalign:'center',editable:false},
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
              text: "ลบรายการสินค้า",
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
  }

  onCellclick = (e) => {
    if(e.args.datafield==='edit'){
      alert('edit');
      console.log(e.args.row.bounddata);

    }else if(e.args.datafield==='confirm'){

      alert('confirm');

    }else if(e.args.datafield==='delete'){

      alert('delete');
      
    }else if(e.args.datafield==='pic'){
      
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
                />
        </center>
      </>
    );
  }
}

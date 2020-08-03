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
            { name:'product_id', type:'string'},
            { name:'product_name', type:'string'},
            { name:'product_count', type:'number'},
        ],
        datatype: 'array',
        localdata:this.props.data
    };
    this.state = {
        columns:[
            { text:'รหัสสินค้า',datafield:'product_id', width: '25%', align: 'center',cellsalign:'center',editable:false},
            { text:'ชื่อสินค้า',datafield:'product_name', width: '45%', align: 'center',cellsalign:'left',editable:false},
            { text:'จำนวนในการสั่งสูงสุด',datafield:'product_count', width: '25%', align: 'center',cellsalign:'center',editable:false},
            {
              text: "แก้ไข",
              datafield: "edit",
         
              cellsrenderer: () => {
                return '<div class="container"><div class="center"><button class="btn"><i class="fa fa-cogs" aria-hidden="true"></i></button></div><div>';
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

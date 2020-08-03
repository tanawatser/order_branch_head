import React, { Component } from 'react';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";

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
            { text:'รหัสสาขา',datafield:'branch_id', width: '15%', align: 'center',cellsalign:'center',editable:false},
            { text:'ชื่อสาขา',datafield:'branch_name', width: '45%', align: 'center',cellsalign:'center',editable:false},
            { text:'สถานะ',datafield:'status', width: '20%', align: 'center',cellsalign:'center',editable:false,sortable:false},
            {
              text: "การใช้งาน",
              datafield: "check",
         
              cellsrenderer: () => {
                return '<div class="container"><div class="center"><input type="checkbox"></div><div>';
              },
              width: "20%",
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

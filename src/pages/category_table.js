import React, { Component } from 'react';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";


// Page หลังจากกดแก้ไขประเภท
export default class Table extends Component {
  constructor(props){
    super(props);
   
    this.myGrid = React.createRef(JqxGrid);

    const source =
    {
        datafields: [
            { name:'cat_id', type:'string'},
            { name:'cat_name', type:'string'},
            { name:'count_pd', type:'string'},

        
        ],
        datatype: 'array',
        localdata:this.props.data,

    };
    
    this.state = {
        columns:[
            { text:'รหัสสินค้า',datafield:'cat_id', width: '10%', align: 'center',cellsalign:'center',},
            { text:'ชื่อสินค้า',datafield:'cat_name', width: '60%', align: 'center',cellsalign:'center',},
            {
              text: "สถานะการใช้งาน",
              datafield: "checkBox",
         
              cellsrenderer: () => {
                
                return '<div class="container"><div class="center"><input type="checkbox"></div></div>';
              
              },
              width: "20%",
              editable: false,
              sortable: false,
              filterable: false,
              align: "center",
            },
            { text:'จำนวนสินค้า',datafield:'count_pd', width: '10%', align: 'center',cellsalign:'center',filterable:false,editable:true},

            
        ],
    
        source: new jqx.dataAdapter(source),
        config:[],

       
    }

  }
  
  render(){
    
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
                 
                />
      </>
    );
  }
}

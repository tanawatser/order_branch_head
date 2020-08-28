import React, { Component } from 'react';
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.metrodark.css";

export default class get_group_cate extends Component {
    constructor(props) {
        super(props)
        this.myGrid = React.createRef(JqxGrid);

        const source =
        {
            datafields: [
                { name:'groupcode', type:'string'},
                { name:'groupname', type:'string'},
                { name:'catcode', type:'string'},
                { name:'catname', type:'string'},

            
            ],
            datatype: 'array',
            localdata:this.props.data,
    
        };
        this.state = {
            columns:[
            { text:'รหัสกลุ่มสินค้า',datafield:'groupcode', width: '15%', align: 'center',cellsalign:'center',editable:false},
            { text:'ชื่อกลุ่มสินค้า',datafield:'groupname', width: '35%', align: 'center',cellsalign:'center',editable:false},
            { text:'รหัสสินค้า',datafield:'catcode', width: '15%', align: 'center',cellsalign:'center',editable:false},
            { text:'ชื่อสินค้า',datafield:'catname', width: '35%', align: 'center',cellsalign:'center',editable:false},
        ],
        
        source: new jqx.dataAdapter(source),
        config:[],
    }
}
    render() {
        return (
            <div>
              
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
            </div>
        )
    }
}

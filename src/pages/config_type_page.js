import React, { Component } from 'react'
import Table from './category_table'

export default class config_type_page extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <>
                <Table data={this.state.data} />
            </>
        )
    }
}

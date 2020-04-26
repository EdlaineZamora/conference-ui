import React, { Component } from 'react';
import './DataTable.scss';

const TableHead = () => {
    return (
        <thead className="table-header">
            <tr>
                <th>Name</th>
                <th>Place</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const lines = props.items.map((item, index) => {
        return (
            <tr className="table-row" key={index}>
                <td>{item.name}</td>
                <td>{item.place}</td>
                <td><button onClick={() => {props.removeItem(index)}}>Remover</button></td>
            </tr>
        );
    })

    return (
        <tbody>
            {lines}
        </tbody>
    );
}

class DataTable extends Component {
    render() {
        const items = this.props.items;

        return (
             <table className="responsive-table">
                <TableHead />
                <TableBody items={items} removeItem={this.props.removeItem} />
            </table>
        );
    }
}

export default DataTable;
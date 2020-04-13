import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Place</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const lines = props.conferences.map((conference, index) => {
        return (
            <tr key={index}>
                <td>{conference.name}</td>
                <td>{conference.place}</td>
                <td><button onClick={() => {props.removeConference(index)}}>Remover</button></td>
            </tr>
        );
    })

    return (
        <tbody>
            {lines}
        </tbody>
    );
}

class ConferencesTable extends Component {
    render() {
        const conferences = this.props.conferences;

        return (
            <table>
                <TableHead />
                <TableBody conferences={conferences} removeConference={this.props.removeConference} />
            </table>
        );
    }
}

export default ConferencesTable;
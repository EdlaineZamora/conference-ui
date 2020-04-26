import React, { Component } from 'react';
import DataTable from '../../components/DataTable/DataTable';

class Conferences extends Component {
    state = {
        conferences: [
            {
                "id": 1,
                "name": "OReilly",
                "place": "London"
            },
            {
                "id": 2,
                "name": "TDC",
                "place": "São Paulo"
            },
            {
                "id": 3,
                "name": "MTC",
                "place": "Belo Horizonte"
            },
            {
                "id": 4,
                "name": "Agile Brazil",
                "place": "Rio de Janeiro"
            }
        ]
    }

    removeConference = index => {
        const { conferences } = this.state;

        this.setState(
            {
                conferences: conferences
                    .filter((conferenceIndex, actualPosition) => {
                        return index !== actualPosition;
                    }),
            }
        )
    }

    render() {
        return (
            <div >
                <DataTable items={this.state.conferences} removeItem={this.removeConference} />
            </div>
        );
    }
}

export default Conferences;
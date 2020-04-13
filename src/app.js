import React, { Component } from 'react';
import ConferencesTable from './components/ConferencesTable/ConferencesTable';

class App extends Component {
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
                <ConferencesTable conferences={this.state.conferences} removeConference={this.removeConference} />
            </div>
        );
    }
}

export default App;
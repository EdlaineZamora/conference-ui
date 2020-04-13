import React from 'react';

function App() {
    return (
        <div >
            <form class="form">
                <div class="form-group">
                    <label for="conference-name">Name</label>
                    <input type="text" id="conference-name" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="data">Data</label>
                    <input type="date" id="data" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="conference-place">Place</label>
                    <input type="text" id="conference-place" class="form-control" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            <div class="panel panel-primary">
                <div class="panel-heading">Conferences</div>
                <div class="panel-body">
                    Content
        </div>
            </div>
        </div>
    );
}

export default App;
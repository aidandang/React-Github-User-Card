import React, { Component } from 'react';
import './App.css';
import Routes from './components/Routes';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-md-6 m-5">
            <Routes />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import CountryList from './CountryList'
import CountryDetail from './CountryDetail'
import { Switch, Route } from 'react-router-dom';
// import BlockCountry from './BlockCountry'

class App extends Component {
  render() {
    return (
      <div id="root">
        <div>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>
        
            <div className="container">
              <div class="row">
                <div class="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
                  <div class="list-group">
                    <CountryList/>
                  </div>
                </div>

                <div className="col-7">
                  <Switch> 
                  <Route path='/details/:id' component={CountryDetail}/>
                  </Switch> 
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;

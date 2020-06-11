import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Details from './component/Details';
import Gallayries from './component/Gallayries';

function App() {
  return (
    <div className="App">
      <Router>
          <Fragment>
            <Navbar />
            <Route path="/" exact component={ Gallayries }/>
            <Route path="/" exact component={ Footer }/>
            <Switch>
            <Route path="/details" exact component={ Details }/>
            
              
            </Switch>
          </Fragment>
        </Router>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Contact from './Contact.jsx';

class App extends Component {
  renderContact() {
    return <Contact />;
  }

  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />
          <div>
            <Route exact={true} path="/contact" render={this.renderContact} />
          </div>
        </>
      </BrowserRouter>
    );
  }
}

export default App;

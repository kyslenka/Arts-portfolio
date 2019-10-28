import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Portfolio from "./Portfolio.jsx";

class App extends Component {
  renderAbout = () => {
    return <About />;
  };
  renderPortfolio = () => {
    return <Portfolio />;
  };
  renderContact() {
    return <Contact />;
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div>
            <Route exact={true} path="/about" render={this.renderAbout} />
          </div>
          <div>
            <Route
              exact={true}
              path="/portfolio"
              render={this.renderPortfolio}
            />
          </div>
          <div>
            <Route exact={true} path="/contact" render={this.renderContact} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

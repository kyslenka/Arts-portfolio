import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import HomePage from "./HomePage.jsx";
import About from "./About.jsx";
import Portfolio from "./Portfolio.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

class App extends Component {
  renderHomePage = () => {
    return <HomePage />;
  };
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
            <Route exact={true} path="/" render={this.renderHomePage} />
          </div>
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
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;

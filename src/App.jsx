import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import About from "./About.jsx";

class App extends Component {
  renderAbout = () => {
    return <About />;
  };
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div>
            <Route exact={true} path="/about" render={this.renderAbout} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

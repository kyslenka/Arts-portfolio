import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />
        </>
      </BrowserRouter>
    );
  }
}

export default App;

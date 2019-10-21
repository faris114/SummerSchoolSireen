import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

import HomeScreen from "./Screens/HomeScreen/index";
class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeScreen />
      </div>
    );
  }
}

export default App;

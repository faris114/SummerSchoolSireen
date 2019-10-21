import React, { Component } from "react";
import About from "../../Components/About/index";
import Contact from "../../Components/Contact/index";
import Places from "../../Components/Places/index";
import Why from "../../Components/Why/index";
import Recommendations from "../../Components/Recommendations/index";
import Gallery from "../../Components/Gallery/index";
import NavBar from "../../Components/NavBar/index";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class HomeScreen extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/places" component={Places} />
          <Route path="/why" component={Why} />
          <Route path="/Recommendations" component={Recommendations} />
          <Route path="/gallery" component={Gallery} />
          <Gallery />
        </Router>
      </div>
    );
  }
}

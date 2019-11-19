import React, { Component } from "react";
import About from "../../Components/About/index";
import Contact from "../../Components/Contact/index";
import Places from "../../Components/Places/index";
import Why from "../../Components/Why/index";
import Recommendations from "../../Components/Recommendations/index";
import Gallery from "../../Components/Gallery/index";
import Navbar from "../../Components/NavBar/Navbar";
import GlobalStyle from "../../styles/global";

export default class HomeScreen extends Component {
  state = {
    navbarOpen: false
  };
  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {
    return (
      <div id="home">
        <Navbar
          navbarState={this.state.navbarOpen}
          handleNavbar={this.handleNavbar}
        />
        <About />
        <Contact />
        <Places />
        <Why />
        <Gallery />
        <Recommendations />
        <GlobalStyle />
      </div>
    );
  }
}

// {
/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/places" component={Places} />
          <Route path="/why" component={Why} />
          <Route path="/Recommendations" component={Recommendations} />
          <Route path="/gallery" component={Gallery} /> */
// }

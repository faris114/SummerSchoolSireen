import React, { Component } from "react";
import "./styles.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="container">
      <Link to="/about">about</Link>
      <Link to="/why">why</Link>
      <Link to="/places">photos</Link>
      <Link to="/contact">contact</Link>
      <Link to="/recommendations">Recommendations</Link>
      <Link to="/gallery">Gallery</Link>
    </div>
  );
};
export default NavBar;

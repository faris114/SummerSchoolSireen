import React, { Component } from "react";
import ThankYou from "../../../public/assets/ThankYou.png";
import styled from "styled-components";
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { useHistory } from "react-router-dom";
import HomeScreen from "../../Screens/HomeScreen/index";
import "./styles.css";
export default class Contact extends Component {
  state = {
    name: "",
    phone: 0,
    msg: "",
    toggleImage: false
  };
  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    fetch("/contactus", {
      method: "POST",
      body: JSON.stringify(this.state)
    }).then(y => {
      this.setState({ toggleImage: true });
    });
    event.preventDefault();
  };
  render() {
    if (!this.state.toggleImage) {
      return (
        <LightSpeed right>
          <Container id="contact">
            <h1>Contact us</h1>
            <form onSubmit={this.handleSubmit}>
              <FormContainer>
                <div>
                  Name:
                  <input
                    type="text"
                    style={{ borderRadius: "1px", height: "30px" }}
                    value={this.state.name}
                    name="name"
                    onChange={this.handleChange}
                  />
                </div>
                Phone number:
                <input
                  type="text"
                  placeholder="insert phone please"
                  style={{ borderRadius: "1px", height: "30px" }}
                  value={this.state.phone}
                  name="phone"
                  onChange={this.handleChange}
                />
                <div className="msgContainer">
                  Massage:
                  <textarea
                    name="Text1"
                    className="inputStyle"
                    type="text"
                    value={this.state.msg}
                    name="msg"
                    onChange={this.handleChange}
                  ></textarea>
                </div>
                <div style={{ alignSelf: "center" }}>
                  <input type="submit" name="Submit" />
                </div>
              </FormContainer>
            </form>
          </Container>
        </LightSpeed>
      );
    } else
      return (
        <Container>
          <LightSpeed left>
            <h1></h1>
            <div>
              <img src={ThankYou} alt="Logo" />
            </div>
          </LightSpeed>
        </Container>
      );
  }
}

const Container = styled.div`
  height: 500px;

  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  margin-top: 50px;
  padding: 10px;
  border-style: outset;
  border-width: 1px;
`;

const FormContainer = styled.div`
  display:flex;
  justify-content:space-around;
  flex-direction: column;
  margin: 10px;
  padding:10px
  height: 200px;
  max-width: 200px;
`;

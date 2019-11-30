import React, { Component } from "react";
import ThankYou from "../../../public/assets/ThankYou.png";
import styled from "styled-components";
import LightSpeed from "react-reveal/LightSpeed";
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
          <FormContainer id="contact">
            <form onSubmit={this.handleSubmit}>
              <div style={{ textAlign: "center" }}>
                <h1>Contact us</h1>
              </div>
              <SpaceBetween>
                <div className="text-style">Name:</div>
                <div>
                  <input
                    className="input-style"
                    type="text"
                    value={this.state.name}
                    name="name"
                    onChange={this.handleChange}
                  />
                </div>
              </SpaceBetween>
              <SpaceBetween>
                <div className="text-style">
                  Phone
                  <br /> number:
                </div>
                <input
                  className="input-style"
                  type="text"
                  placeholder="insert phone please"
                  value={this.state.phone}
                  name="phone"
                  onChange={this.handleChange}
                />
              </SpaceBetween>
              <SpaceBetween style={{ alignItems: "end" }}>
                <div className="text-style"> Massage:</div>
                <textarea
                  name="Text1"
                  className="text-area"
                  type="text"
                  value={this.state.msg}
                  name="msg"
                  onChange={this.handleChange}
                ></textarea>
              </SpaceBetween>
              <ButtonDiv>
                <input className="button-style" type="submit" name="Submit" />
              </ButtonDiv>
            </form>
          </FormContainer>
        </LightSpeed>
      );
    } else
      return (
        <Image>
          <LightSpeed left>
            <img className="thank-you" src={ThankYou} alt="Logo" />
          </LightSpeed>
        </Image>
      );
  }
}

// const Container = styled.div`
//   height: 500px;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   padding: 10px;
//   border-style: outset;
//   border-width: 1px;
// `;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto 10vw;
  padding: 1vw;
  border-style: solid;
  border-radius: 10px;
  border-width: 1px;
  box-shadow: 7px 7px 18px 0px black;
  @media (min-width: 600px) {
    margin: auto 
    padding: 1vw;
    width: 35%;
  }
`;

const Image = styled.div`
  border-style: solid;
  border-width: 1px;
  padding: 1vw;
  margin: 3vw;
  box-shadow: 3px 7px 8px 0px black;
`;
const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3vw;
  align-items: flex-end;
  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    margin: 1vw;
  }
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 3vw;
`;

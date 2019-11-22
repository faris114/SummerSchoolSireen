import React, { useState } from "react";
import styled from "styled-components";
import AboutArabic from "../../../public/Languages/Arabic";
import "./styles.css";
export default function About(props) {
  const [opacity, setOpacity] = useState("sireen");
  const incOpacity = whoIsIt => {
    setOpacity(whoIsIt);
  };
  console.log(props.navbarState);
  return (
    <Container id="about">
      <h1>about</h1>
      <div className="container">
        <div
          id={!props.navbarState && opacity === "sireen" ? "opacity" : null}
          className="innerContainer"
        >
          <button className="button" onClick={() => incOpacity("sireen")}>
            <div className="imgContainer">
              <img
                style={{
                  borderRadius: "50%"
                }}
                src={require("../../../public/assets/sireen.png")}
                width={"100%"}
                height={"100%"}
              />
            </div>

            <p>ooooooooooooooo</p>
          </button>
        </div>
        <div
          id={!props.navbarState && opacity === "faris" ? "opacity" : null}
          className="innerContainer"
        >
          <button onClick={() => incOpacity("faris")} className="button">
            <div className="imgContainer">
              <img
                style={{
                  borderRadius: "50%"
                }}
                src={require("../../../public/assets/faris.png")}
                width={"100%"}
                height={"100%"}
              />
            </div>
            <p>ooooooooooooooo </p>
          </button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
height:500px;
  display:flex;
  align-items:center;
  flex-direction: column;
  margin: 10px;
  margin-top:50px;
  padding:10px
  background-color: yellow;
`;

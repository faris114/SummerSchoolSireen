import React, { useState } from "react";
import styled from "styled-components";
import "./styles.css";
export default function About() {
  const [opacity, setOpacity] = useState("sireen");
  const incOpacity = whoIsIt => {
    setOpacity(whoIsIt);
  };
  return (
    <Container id="about">
      <h1>about</h1>
      {console.log(opacity)}
      <div className="container">
        <div id={opacity === "sireen" && "opacity"} className="innerContainer">
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

            <p>
              ooooooooooooooo kkkkkkkkkkkkkkkkkkk ooooooooooooosdopasf
              safokasofkasopkfoas asofkasofkasofk asokfpoaskfpsaofksaopfka
              asofkpasfopaskfpaso ofkopaskfopasf aospkfaspaposfksp
              ofkakpasofasdfosdkgds saopfkosafkoasofkosa aspofpoafkskfsaopo
              pkafspokaffaksoakop
            </p>
          </button>
        </div>
        <div id={opacity === "faris" && "opacity"} className="innerContainer">
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
            <p>
              ooooooooooooooo kkkkkkkkkkkkkkkkkkk ooooooooooooosdopasf
              safokasofkasopkfoas asofkasofkasofk asokfpoaskfpsaofksaopfka
              asofkpasfopaskfpaso ofkopaskfopasf aospkfaspaposfksp
              ofkakpasofasdfosdkgds saopfkosafkoasofkosa aspofpoafkskfsaopo
              pkafspokaffaksoakop
            </p>
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

import React, { Component, useEffect, useState } from "react";
import { useSpring, animated, config } from "react-spring";
import Zoom from "react-reveal/Zoom";
import styled from "styled-components";
export default function Why() {
  return (
    <Zoom>
      <div id="why">
        <Container>
          <H1>Why us </H1>
          <Parag>
            We have long-standing  experience  and multiple skills for
            substantiating our goals through locating the best choices. Helping
            students to come become independent and self-confident as a result
            of being exposed to a different cultures and accepting "the other
            different" .We are reliable to achieve our goals beyond any doubt
            .this is our credibility.students will be carefully supervised and
            attended to. attending to student's feeling and psychological
            condition
          </Parag>
        </Container>
      </div>
    </Zoom>
  );
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
const H1 = styled.h1`
  text-shadow: -4px 8px 6px #cebace;
  font-family: "Times New Roman", Times, serif;
`;
const Parag = styled.p` 
font-size: 18px;
    margin: auto auto
    font-family: "Times New Roman", Times, serif;
    color: #444444;
background: #FFFFFF;
text-shadow: 1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC;
`;

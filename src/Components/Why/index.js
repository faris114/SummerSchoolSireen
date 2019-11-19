import React, { Component, useEffect, useState } from "react";
import { useSpring, animated, config } from "react-spring";
import Zoom from "react-reveal/Zoom";
import styled from "styled-components";
export default function Why() {
  return (
    <Zoom>
      <div id="why">
        <Container>
          <h1>Why us </h1>
          <p style={{ fontSize: "15px", margin: "10px" }}>
            We have long-standing  experience  and multiple skills for
            substantiating our goals through locating the best choices. Helping
            students to come become independent and self-confident as a result
            of being exposed to a different cultures and accepting "the other
            different" .We are reliable to achieve our goals beyond any doubt
            .this is our credibility.students will be carefully supervised and
            attended to. attending to student's feeling and psychological
            condition
          </p>
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

// const container = () => {
//   console.log("before");
//   useSpring({
//     transition: "transform 1.2s",
//     background: "#2d3436",
//     transform: "scale(1.2)"
//   });
//   console.log("after");
// };
// var width = window.innerWidth;
// var height = window.innerHeight;

// const [props, set, stop] = useSpring(() =>

//   window.addEventListener("scroll", function() {
//     console.log("hlhlhl");
//   })
// );

// Update spring with new props
// set({ opacity: toggle ? 1 : 0 });
// Stop animation
// stop();
// const zoomAnimation = useSpring({
//   from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
//   to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
//   delay: 800
// });

// useEffect(() => {
//   window.addEventListener("scroll", function() {
//     console.log("hlhlhl");
//   }); // code to run on component mount
// });

//:hover{
// transition: transform 1.2s;
//transform: scale(1.2);
//}

// useEffect(() => {
//   const ros = document.getElementById("why");
//   console.log(ros, "hello window");
//   ros.addEventListener("scroll", function() {
//     const toggledStyle = {
//       transition: "transform 1.2s",
//       background: "#2d3436",
//       transform: "scale(1.5)"
//     };
//     toggleZoom(toggledStyle);
//   });
//   toggleZoom(null);
// });

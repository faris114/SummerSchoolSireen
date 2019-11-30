import React, { useState } from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import places from "../../../public/PlacesAssets";
import VisibilitySensor from "react-visibility-sensor";
import "./styles.css";
const carouselLoop = () => {
  return places.map((current, index) => {
    const [visible, setVisible] = useState(true);
    return (
      <Carousel.Item key={index}>
        <img className="img" src={current.image} alt="First slide" />
        <Carousel.Caption>
          <VisibilitySensor
            onChange={isVisble => {
              setVisible(isVisble);
            }}
          >
            <div id={visible ? "move-h1" : null}>
              <h1 className="title">{current.title}</h1>
            </div>
          </VisibilitySensor>
          <div id={visible ? "zoom" : null}>
            <p className="description">{current.description}</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
};

export default function Places() {
  return (
    <div id="places">
      <Container>
        <Carousel interval="10000000000000">{carouselLoop()}</Carousel>
      </Container>
    </div>
  );
}

const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  margin-top: 50px;
  padding: 10px;
  border-style: outset;
  border-width: 1px;
`;

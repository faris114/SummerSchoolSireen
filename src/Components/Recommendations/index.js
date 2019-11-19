import React from "react";
import styled from "styled-components";

export default function Recommendations() {
  return (
    <Container>
      <div id="recommendations">
        <h1>Recommendations</h1>
      </div>
    </Container>
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

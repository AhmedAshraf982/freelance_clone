import React from "react";
import styled from "styled-components";
import CardData from "./CardData";

const Container = styled.div`
  width: 80%;
  height: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  opacity: 0.8;
  @media screen and (max-width: 768px) {
    border: none;
    margin-bottom: 0;
    bordr-shadow: none;
    width: 100%;
  }
`;

const Card = () => {
  return (
    <>
      <Container>
        <CardData></CardData>
        <CardData></CardData>
        <CardData></CardData>
        <CardData></CardData>
        <CardData></CardData>
        <CardData></CardData>
        <CardData></CardData>
        <CardData></CardData>
      </Container>
    </>
  );
};

export default Card;

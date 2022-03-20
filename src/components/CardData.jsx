import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TypesButton from "./TypesButton";

const Card = styled.div`
  height: auto;
  min-height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  border-top: 1px solid rgba(0, 0, 50, 0.2);
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.h5`
  margin: 2rem;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  &:hover {
    color: rgba(50, 20, 200, 1);
    text-decoration: underline;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    margin: 0.5rem 2rem;
  }
`;

const Description = styled.p`
  margin: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  span {
    margin-left: 2px;
    color: green;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 2rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0.5rem 2rem;
    align-items: flex-start;
  }
`;

const PriceType = styled.p`
  margin-right: 0.5rem;
  font-weight: 600;
  opacity: 0.5;
  font-size: 0.9rem;
`;
const Level = styled.p`
  margin-right: 0.5rem;
  opacity: 0.8;
  font-size: 0.9rem;
`;
const Budget = styled.p`
  margin-right: 0.5rem;
  opacity: 0.8;
  font-size: 0.9rem;
`;
const PostedTime = styled.p`
  margin-right: 0.5rem;
  opacity: 0.8;
  font-size: 0.9rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem 2rem;
  @media screen and (max-width: 950px) {
    overflow-x: scroll;
    padding: 10px;
  }
`;

const Skill = styled.h4``;

const Category = styled.h4``;

const ReadMore = ({ children }) => {
  const text = children;

  const [isShow, setIsShow] = useState(true);
  let result;

  result = isShow ? text.slice(0, 400) : text;
  const toggleisShow = () => {
    setIsShow(!isShow);
  };

  return (
    <Description>
      {result}
      <span onClick={toggleisShow}>
        {isShow ? (result === text ? "" : "more") : "less"}
      </span>
    </Description>
  );
};

const CardData = (props) => {
  return (
    <>
      <Card>
        <Title>Hello world</Title>
        <List>
          <PriceType>Fixed-price</PriceType>
          <Level>Expert</Level>
          <Budget>Est.Budget:$40</Budget>
          <PostedTime>Posted 8 hours ago</PostedTime>
        </List>
        <ReadMore>
          Hi, A very simple and easy task. I am working on a simple flask
          application, and most part is already done. I just need someone, to
          help me with some HTML and Javascript. Will prefer if we can jump on a
          quick call and have a working session
        </ReadMore>
        <ButtonGroup>
          <TypesButton />
          <TypesButton />
          <TypesButton />
          <TypesButton />
          <TypesButton />
          <TypesButton />
          <TypesButton />
          <TypesButton />
        </ButtonGroup>
      </Card>
    </>
  );
};

export default CardData;

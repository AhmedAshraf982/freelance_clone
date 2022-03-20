import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  height: 200px;
  margin: 2rem 8.5rem 2rem;
  border: 1px solid rgba(195, 10, 20, 0.2);
  background-color: whitesmoke;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    display: none;
    height: 0;
  }
`;

const Date = styled.p`
  margin: 2rem 2rem 0 2rem;
`;

const Timing = styled.p`
  margin: 0 2rem 0 2rem;
`;

const UserName = styled.p`
  margin: 0 2rem 0 2rem;
`;

const Header = () => {
  return (
    <>
      <Container>
        <Date>Saturday, March 19th</Date>
        <Timing>Good Evening,</Timing>
        <UserName>Ahmed A.</UserName>
      </Container>
    </>
  );
};

export default Header;

import React from "react";
import styled from "styled-components";
import MainBody from "./MainBody";
import SideBar from "./SideBar";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 80%;
  margin: 1rem auto;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 1rem 0;
  }
`;

const UserDashBoard = () => {
  return (
    <>
      <Container>
        <SideBar />
        <MainBody />
      </Container>
    </>
  );
};

export default UserDashBoard;

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1f2f4;
  height: 250px;
`;

const ContainerMenu = styled.div`
  margin: 1rem 2rem;
`;

const SideItem = styled.p`
  cursor: pointer;
  padding: 1rem 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const SideBar = () => {
  return (
    <>
      <Container>
        <ContainerMenu>
          <SideItem>Contact Info</SideItem>
          <SideItem>Profile Settings</SideItem>
          <SideItem>Password & Security</SideItem>
        </ContainerMenu>
      </Container>
    </>
  );
};

export default SideBar;

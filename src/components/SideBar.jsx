import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f1f2f4;
  height: 250px;
  @media screen and (max-width: 768px) {
    display: none;
    transition: 0.8s all ease-in-out;
    transform: translateX(-100%);
  }
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

const SelectDropDown = styled.select`
  display: none;
  transition: 0.8s all ease-in-out;
  transform: translateX(-100%);
  @media screen and (max-width: 768px) {
    display: flex;
    position: fixed;
    width: 100%;
    height: 10%;
    transform: translateX(0);
    box-shadow: 0px 15px 10px -15px #aef5ff;
    border: 2px solid black;
    transition: 0.2s all ease-in-out;
    font-size: 1.2rem;
  }
`;

const OptionMenu = styled.option`
  font-size: 1.1rem;
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
      <SelectDropDown>
        <OptionMenu>Contact Info</OptionMenu>
        <OptionMenu>Profile Settings</OptionMenu>
        <OptionMenu>Password & Security</OptionMenu>
      </SelectDropDown>
    </>
  );
};

export default SideBar;

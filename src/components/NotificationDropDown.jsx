import React from "react";
import styled from "styled-components";
import MessageNotify from "./MessageNotify";

const Container = styled.div`
  width: 250px;
  height: auto;
  background-color: #fff;
  border-radius: 5px;
  min-height: 0px;
  position: absolute;
  left: 680px;
  z-index: 999;
  top: 50px;
  display: flex;
  flex-direction: column;
  border: 2px solid #0c6ca1;
  transition: 0.5s all ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "50" : "50")};
  @media screen and (max-width: 768px) {
    transition: 0s all ease-in-out;
    z-index: 1100;
    left: 200px;
    width: 50%;
    top: 330px;
    top: ${({ isOpen }) => (isOpen ? "310" : "-100%")};
  }
`;

const NotificationDropDown = (props) => {
  return (
    <>
      <Container isOpen={props.showNotification}>
        {/* <Pin>hi</Pin> */}
        <MessageNotify />
        <MessageNotify />
        <MessageNotify />
      </Container>
    </>
  );
};

export default NotificationDropDown;

import React from "react";
import styled from "styled-components";
import MessageNotify from "./MessageNotify";

const Container = styled.div`
  width: 20%;
  height: auto;
  background-color: #fff;
  border-radius: 5px;
  min-height: 150px;
  position: absolute;
  left: 620px;
  z-index: 999;
  top: 50px;
  display: flex;
  flex-direction: column;
  border: 2px solid #aef5f5;
  transition: 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "50" : "50")};
  @media screen and (max-width: 768px) {
    z-index: 1100;
    left: 200px;
    width: 50%;
    top: 310px;
    top: ${({ isOpen }) => (isOpen ? "250" : "250")};
  }
  /* background-color: transparent; */
`;

// const Pin = styled.div`
//   position: absolute;
//   top: -5px;
//   left: 15px;
//   height: 15px;
//   width: 65px;

//   background-color: black;
// `;

const MessageDropDown = (props) => {
  return (
    <>
      <Container isOpen={props.showMessage}>
        {/* <Pin>hi</Pin> */}
        <MessageNotify />
        <MessageNotify />
        <MessageNotify />
      </Container>
    </>
  );
};

export default MessageDropDown;

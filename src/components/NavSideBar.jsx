import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import MessageDropDown from "./MessageDropDown";

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: white;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  @media screen and (min-width: 768px) {
    top: -100;
    display: none;
  }
`;

const CloseIcon = styled(FaTimes)`
  color: #aef5f5;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: #fff;
`;

const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-styled: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #aef5f5;
  cursor: pointer;
  &:hover {
    color: #60a8c4;
    transition: 0.2s ease-in-out;
  }
`;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;
  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

const SideBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const SidebarRoute = styled.button`
  border-radius: 50px;
  background: #fff;
  padding: 16px 64px;
  color: #aef5f5;
  font-size: 1.5rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-bottom: 1rem;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #aef5f5;
    color: #fff;
  }
`;

const NavSideBar = (props) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClose = () => {
    setShowMessage(false);
    props.toggle();
  };
  return (
    <>
      <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
        <Icon onClick={handleClose}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="findjob">Find Job</SidebarLink>
            <SidebarLink to="postjob">PostJob</SidebarLink>
            <SidebarLink
              to="postjob"
              onClick={() => setShowMessage(!showMessage)}
            >
              Message
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute
              onClick={() => {
                props.closeSignupModal(true);
              }}
            >
              Sign Up
            </SidebarRoute>
            <SidebarRoute
              onClick={() => {
                props.closeLoginModal(true);
              }}
            >
              Sign In
            </SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
      <MessageDropDown showMessage={showMessage} own={true} />
    </>
  );
};

export default NavSideBar;

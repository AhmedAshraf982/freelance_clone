import React from "react";
import styled from "styled-components";
import {FaTimes} from "react-icons/fa";
import {Link as LinkS} from "react-scroll";

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: index 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
    color:#fff;
`;

const Icon = styled.div`

    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size:2rem;
    cursor:pointer;
    outline:none;
`

const SidebarWrapper = styled.div`
    color:#fff;
`

const SidebarLink = styled(LinkS)`
    display:flex;
    align-items:center;
    justify-content: center;
    font-size:1.5rem;
    text-decoration:none;
    list-styled:none;
    transition:0.2s ease-in-out;
    text-decoration:none;
    color:#fff;
    cursor: pointer;
    &:hover{
        color:#01bf71;
        transition:0.2s ease-in-out;
    }
`;

const SideBtnWrap = styled.div`
    display:flex;
    jsutify-content:center;
`

const SidebarRoute = styled.button`
    borer-radius:50px;
    background:#01bf71;
    white-space:nowrap;
    padding:16px 64px;
    color:#010606;
    font-size:16px;
    outline:none;
    border:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;
    &:hover{
        transition:all 0.2s ease-in-out;
        background:#fff;
        color:#010606;
    }

`;


const NavSideBar = () => {
  return <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
          <SidebarMenu>
          <SidebarLink to="findjob">
          Find Job
          </SidebarLink>
          </SidebarMenu>
          <SidebarMenu>
          <SidebarLink to="postjob">
            PostJob
          </SidebarLink>
          </SidebarMenu>
          <SidebarMenu>
          <SidebarLink to="Message">
            Message
          </SidebarLink>
          </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute>
            Sign Up
            </SidebarRoute>
            <SidebarRoute>
            Sign In
            </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
  </SidebarContainer>;
};

export default NavSideBar;

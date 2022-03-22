import React, { useState } from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import MessageDropDown from "./MessageDropDown";
import NotificationDropDown from "./NotificationDropDown";

const Nav = styled.nav`
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0px 15px 10px -15px #0c6ca1;
  @media screen and (max-width: 960px) {
    height: 60px;
    transition: 0.8s all ease;
  }
`;
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 1.5rem;
  max-width: 1100px;
  position: relative;
  @media screen and (max-width: 960px) {
    height: 60px;
    transition: 0.8s all ease;
  }
`;

const Logo = styled.img`
  display: flex;
  justify-self: flex-start;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin-left: 1rem;
  cursor: pointer;
  text-decoration: none;
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-right: -22px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
  text-decoration: none !important;
`;

const NavLinks = styled(LinkS)`
  color: #0c6ca1;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  font-size: 1.1rem;
  text-decoration: none !important;
  cursor: pointer;
  &:hover {
    color: #023958;
    transform: scaleY(1.2);
    transition: 0.3s all ease-in-out;
  }
  /* &:active {
    border-bottom: 1px solid #023958;
  } */
`;

const NavButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  outline: none;
  background-color: #fff;
  font-size: 16px;
  color: #0c6ca1;
  margin-left: 1rem;
  padding: 10px 22px;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #0c6ca1;
    color: #fff;
  }
`;

const ImageIcon = styled.img`
  border-radius: 50px;
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-left: 1rem;
  cursor: pointer;
`;

const DropDown = styled.div`
  position: absolute;
  top: 4rem;
  right: 10rem;
  background: #fff;
  border-radius: 5px;
  border: 2px solid #0c6ca1;
  width: auto;
  min-width: 100px;
`;

const UserName = styled.h3`
  text-align: center;
  font-size: 1rem;
  margin: 1rem 0 0.5rem 0;
  border-bottom: 2px solid #023958;
  color: #0c6ca1;
`;

const ListMenu = styled.ul`
  list-style: none;
  margin: 0 1rem;
`;

const List = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
  font-size: 1.1rem;
  color: #0c6ca1;
`;

const SettingLogo = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
`;

const LogOutLogo = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
`;

const Navbar = (props) => {
  const [dropshow, setDropShow] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showNotification, setshowNotification] = useState(false);
  return (
    <>
      <Nav onClick={() => setShowMessage(false)}>
        <NavbarContainer
          onClick={() => {
            setShowMessage(false);
            setshowNotification(false);
          }}
        >
          <Logo src="./logo.png" alt="logo" />
          <MobileIcon onClick={props.toggle}>
            <FaBars color="#023958" />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks>Find Job</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Post Job</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                onClick={() => {
                  setShowMessage(!showMessage);
                  setshowNotification(false);
                  setDropShow(false);
                }}
              >
                Message
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                onClick={() => {
                  setshowNotification(!showNotification);
                  setShowMessage(false);
                  setDropShow(false);
                }}
              >
                Notification
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavButton>
            <Button
              onClick={() => {
                props.closeLoginModal(true);
              }}
            >
              Sign In
            </Button>
            <Button
              onClick={() => {
                props.closeSignupModal(true);
              }}
            >
              Sign Up
            </Button>
            <ImageIcon
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
              onClick={() => {
                setDropShow(!dropshow);
                setshowNotification(false);
                setShowMessage(false);
              }}
            />
          </NavButton>
        </NavbarContainer>
        {dropshow && (
          <DropDown>
            <UserName>Ahmed</UserName>
            <ListMenu>
              <List>
                <SettingLogo>
                  <AiFillSetting />
                </SettingLogo>
                Settings
              </List>
              <List>
                <LogOutLogo>
                  <BiLogOut />
                </LogOutLogo>
                LogOut
              </List>
            </ListMenu>
          </DropDown>
        )}
      </Nav>
      <MessageDropDown showMessage={showMessage} />
      <NotificationDropDown showNotification={showNotification} />
    </>
  );
};

export default Navbar;

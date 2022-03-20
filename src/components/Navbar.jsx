import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  height: 80px;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
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
`;

const Logo = styled(LinkR)`
  color: green;
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
  margin-right: -22px;
  list-style: none;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled(LinkS)`
  color: black;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  text-decoration: none;
  cursor: pointer;
  &:active {
    border-bottom: 3px solid #01bf71;
  }
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
  font-size: 16px;
  color: #010636;
  margin-left: 1rem;
  white-space: nowrap;
  padding: 10px 22px;
  border-radius: 50px;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #fff;
    color: #010636;
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

const Navbar = (props) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Logo to="/">fiverr</Logo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks>Find Jon</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Post Job</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Message</NavLinks>
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
            <ImageIcon src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" />
          </NavButton>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

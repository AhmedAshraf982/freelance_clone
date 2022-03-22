import React from "react";
import styled from "styled-components";
import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiFillGithub,
  AiFillApple,
  AiFillAndroid,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import "./footerStyle.css";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 6px;
  width: 100%;
  background-color: rgba(12, 106, 193, 0.4);
  margin-top: 4rem;
  padding: 4rem 2.5rem 0rem 5rem;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0 0.5rem 1rem;
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 6px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: flex-start;
  }
`;

const LinkContainer = styled.div`
  border-top: 1px solid rgb(12, 106, 193);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 6px;
  border-bottom: 1px solid rgb(12, 106, 193);
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const List = styled.ul`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  list-style: none;
  li {
    line-height: 26px;
    text-decoration: none;
    &:hover {
      color: rgb(12, 106, 193);
    }
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const Follow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

const MobileApp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-right: 5rem;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10rem;
  }
`;

const FaIcon = styled(BsFacebook)`
  margin-left: 2.5rem;
  cursor: pointer;
  &:hover {
    color: rgb(12, 106, 193);
  }
`;

const YtIcon = styled(AiFillYoutube)`
  margin-left: 2.5rem;
  cursor: pointer;
  &:hover {
    color: rgb(12, 106, 193);
  }
`;

const InIcon = styled(AiFillInstagram)`
  margin-left: 2.5rem;
  cursor: pointer;
  &:hover {
    color: rgb(12, 106, 193);
  }
`;
const LiIcon = styled(AiFillGithub)`
  margin-left: 2.5rem;
  cursor: pointer;
  &:hover {
    color: rgb(12, 106, 193);
  }
`;
const TaIcon = styled(AiFillTwitterCircle)`
  margin-left: 2.5rem;
  cursor: pointer;
  &:hover {
    color: rgb(12, 106, 193);
  }
`;

const ApIcon = styled(AiFillApple)`
  margin-left: 2.4rem;
  cursor: pointer;
  &:hover {
    color: rgb(12, 106, 193);
  }
`;

const AIcon = styled(AiFillAndroid)`
  margin-left: 2.5rem;
  cursor: pointer;
  &:hover {
    color: rgb(12, 106, 193);
  }
`;

const CopyRight = styled.div`
  text-align: center;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Footer = () => {
  return (
    <>
      <Container>
        <ListContainer>
          <List>
            <li>About Us</li>
            <li>Feedback</li>
            <li>Community</li>
          </List>
          <List>
            <li>Trust, Safety & Security</li>
            <li>Help & Support</li>
            <li>Freelance Foundation</li>
          </List>
          <List>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Accessibility</li>
          </List>
          <List>
            <li>Desktop App</li>
            <li>Cookie Policy</li>
            <li>Enterprise Solutions</li>
          </List>
        </ListContainer>
        <LinkContainer>
          <Follow>
            <p>Follow Us</p>
            <FaIcon />
            <TaIcon />
            <YtIcon />
            <InIcon />
            <LiIcon />
          </Follow>
          <MobileApp>
            <p>Mobile App</p>
            <AIcon />
            <ApIcon />
          </MobileApp>
        </LinkContainer>
        <CopyRight>&copy; 2020-2023 fiverr Global inc.</CopyRight>
      </Container>
    </>
  );
};

export default Footer;

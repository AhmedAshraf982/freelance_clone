import React from "react";
import styled from "styled-components";
import ContactInfo from "./ContactInfo";
import PasswordSecurity from "./PasswordSecurity";
import ProfileSetting from "./ProfileSetting";

const Container = styled.div`
  height: auto;
  min-height: 700px;
  margin-bottom: 2rem;
`;

const MainBody = () => {
  return (
    <>
      <Container>
        <ContactInfo />
        <ProfileSetting />
        <PasswordSecurity />
      </Container>
    </>
  );
};

export default MainBody;

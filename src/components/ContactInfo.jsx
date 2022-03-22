import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 80%;
  margin-left: 2rem;
  margin-bottom: 8rem;
  @media screen and (max-width: 768px) {
    transition: 0.8s all ease-in-out;
    width: 100%;
    margin: 3rem 0;
    margin-left: 0;
  }
`;

const Heading = styled.h5`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 2rem 2rem;
  @media screen and (max-width: 768px) {
    margin: 2rem 0 0 0;
  }
`;

const AccountContainer = styled.div`
  border: 1px solid #0c6ac1;
  border-radius: 5px;
  padding: 1rem 2rem;
  background-color: #fff;
  @media screen and (max-width: 768px) {
    border-left: 0;
    border-right: 0;
  }
`;

const Title = styled.h5`
  border-bottom: 1px solid #0c6ac1;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Group = styled.div`
  padding: 1rem;
`;

const LabelName = styled.p`
  margin-bottom: 1rem;
`;

const InputField = styled.input`
  width: 50%;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #0c6ac1;
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
    width: 65%;
  }
`;

const FirstContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UpdateButton = styled.button`
  border: 1px solid #fff;
  border-radius: 160px;
  background-color: #0c6ac1;
  color: #fff;
  padding: 0.5rem 1rem;
  text-align: center;
  margin: 0.5rem auto 1.5rem auto;
  font-size: 15px;
  width: 160px;
  cursor: pointer;
  &:hover {
    color: #0c6ac1;
    background-color: #fff;
    border: 1px solid #0c6ac1;
  }
`;

const CancelButton = styled.button`
  border: 1px solid red;
  border-radius: 160px;
  background-color: #fff;
  color: red;
  padding: 0.5rem 1rem;
  text-align: center;
  margin: 0.5rem auto 1.5rem auto;
  font-size: 15px;
  width: 160px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: red;
    border: 1px solid #fff;
  }
`;

const ContactInfo = () => {
  return (
    <>
      <Container>
        <Heading>Contact Info</Heading>
        <AccountContainer>
          <Title>Account</Title>
          <Data>
            <Group>
              <LabelName>FirstName</LabelName>
              <InputField type="text" value="Ahmed" />
            </Group>
            <Group>
              <LabelName>LastName</LabelName>
              <InputField type="text" value="Ashraf" />
            </Group>
            <Group>
              <LabelName>Email</LabelName>
              <InputField type="email" value="ahmrledsmart77@gmail.com" />
            </Group>
            <FirstContainer>
              <UpdateButton>Update</UpdateButton>
              <CancelButton>Cancel</CancelButton>
            </FirstContainer>
          </Data>
        </AccountContainer>
      </Container>
      <Container>
        <AccountContainer>
          <Title>Location</Title>
          <Data>
            <Group>
              <LabelName>Time Zone</LabelName>
              <InputField type="time" value="UTC+05:00" />
            </Group>
            <Group>
              <LabelName>Address</LabelName>
              <InputField type="text" value="Garden East" />
            </Group>
            <Group>
              <LabelName>Phone</LabelName>
              <InputField type="text" value="12123313461" />
            </Group>
            <FirstContainer>
              <UpdateButton>Update</UpdateButton>
              <CancelButton>Cancel</CancelButton>
            </FirstContainer>
          </Data>
        </AccountContainer>
      </Container>
    </>
  );
};

export default ContactInfo;

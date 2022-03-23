import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  height: auto;
  min-height: 80%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 1rem 5rem 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    transition: 0.8s all ease-in-out;
  }
`;

const Heading = styled.h5`
  text-align: left;
  font-size: 1.1rem;
  /* background-color: #0c6ac1; */
  color: black;
  padding: 1rem;
  @media screen and (max-width: 768px) {
    text-align: center;
    transition: 0.3s all ease-in-out;
  }
`;

const MinContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #0c6ac1;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    width: 100%;
    border: none;
    border-radius: 0;
    transition: 0.8s all ease-in-out;
  }
`;

const JobName = styled.h6`
  font-size: 1.1rem;
  padding: 1rem;
`;

const ClientName = styled.h6`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  font-weight: lighter;
  span {
    padding: 0 0 0 4.5rem;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

const Budget = styled.p`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  font-weight: lighter;
  span {
    padding: 0 0 0 7rem;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

const NumberofDays = styled.p`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  font-weight: lighter;
  span {
    padding: 0 0 0 1rem;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

const SubmitTask = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #0c6ac1;
  padding: 1rem;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const LabelName = styled.label`
  font-size: 1rem;
  font-weight: lighter;
  padding: 1rem 0;
`;

const InputText = styled.textarea`
  padding: 1rem;
  font-size: 17px;
  opacity: 0.9;
  font-weight: lighter;
  border-radius: 5px;
  height: 100px;
  border: 1px solid #0c6ac1;
  &:hover {
    border: 1px solid #023958;
  }
`;

const InputField = styled.input`
  padding: 1rem;
  font-size: 17px;
  opacity: 0.9;
  font-weight: lighter;
  border-radius: 5px;
  border: 1px solid #0c6ac1;
  &:hover {
    border: 1px solid #023958;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  justify-content: center;
`;

const TaskButton = styled.button`
  border: 1px solid transparent;
  padding: 1rem 2rem;
  background-color: #0c6ac1;
  color: #fff;
  cursor: pointer;
  margin-right: 1rem;
  &:hover {
    color: #0c6ac1;
    background-color: #fff;
    border: 1px solid #0c6ac1;
  }
`;

const TaskCancel = styled.button`
  border: 1px solid red;
  padding: 1rem 2rem;
  background-color: #fff;
  color: red;
  cursor: pointer;
  margin-right: 1rem;
  &:hover {
    color: #fff;
    background-color: red;
    border: 1px solid #fff;
  }
`;

const JobSubmitPage = () => {
  return (
    <Container>
      <Heading>Submit Job Task</Heading>
      <MinContainer>
        <JobName>Hello World</JobName>
        <ClientName>
          Client Name:<span>Ahmed</span>
        </ClientName>
        <Budget>
          Budget:<span>$25.00</span>
        </Budget>
        <NumberofDays>
          Number of Days Left:<span>5 days</span>
        </NumberofDays>
        <SubmitTask>
          <Group>
            <LabelName>Message</LabelName>
            <InputText />
          </Group>
          <Group>
            <LabelName>Attachment</LabelName>
            <InputField type="file" />
          </Group>
          <ButtonGroup>
            <TaskButton>Submit Task</TaskButton>
            <TaskCancel>Cancel</TaskCancel>
          </ButtonGroup>
        </SubmitTask>
      </MinContainer>
    </Container>
  );
};

export default JobSubmitPage;

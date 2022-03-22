import styled from "styled-components";
import React from "react";

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

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const Title = styled.label`
  font-weight: 500;
  font-size: 18px;
  color: #000;
  opacity: 0.8;
  padding: 1rem 0;
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

const FormGroup1 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    transition: 0.8s all ease-in-out;
  }
`;

const FG = styled.div`
  display: flex;
  flex-direction: column;
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

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  justify-content: center;
`;

const PostButton = styled.button`
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

const CancelButton = styled.button`
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

const PostaJob = () => {
  return (
    <>
      <Container>
        <Heading>POST A JOB</Heading>
        <MinContainer>
          <FormGroup>
            <Title>Title Of Job</Title>
            <InputField type="text" required placeholder="e.g Python Script" />
          </FormGroup>
          <FormGroup1>
            <FG>
              <Title>Price Type</Title>
              <InputField
                type="text"
                required
                placeholder="e.g Fixed Partial"
              />
            </FG>
            <FG>
              <Title>Level</Title>
              <InputField type="text" required placeholder="e.g Expert" />
            </FG>
            <FG>
              <Title>Budget</Title>
              <InputField type="text" required placeholder="e.g $5.00" />
            </FG>
          </FormGroup1>
          <FormGroup>
            <Title>Description</Title>
            <InputText required />
          </FormGroup>
          <FormGroup>
            <Title>Start Date</Title>
            <InputField type="datetime-local" required />
            <Title>End Date</Title>
            <InputField type="datetime-local" required />
          </FormGroup>
          <ButtonGroup>
            <PostButton>POST</PostButton>
            <CancelButton>Cancel</CancelButton>
          </ButtonGroup>
        </MinContainer>
      </Container>
    </>
  );
};

export default PostaJob;

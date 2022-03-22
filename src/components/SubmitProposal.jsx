import React from "react";
import styled from "styled-components";
import ButtonSkill from "./ButtonSkill";

const Title = styled.h5`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 2rem 0 1rem 6rem;
  font-size: 1.2rem;
  color: black;
  font-weight: 600;
`;

const JobDetails = styled.div`
  width: 80%;
  min-height: 350px;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 2fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  border: 1px solid #0c6ac1;
  border-radius: 5px;
  margin: auto;
  background-color: #fff;
  @media screen and (max-width: 768px) {
    border-top: 1px solid #0c6ac1;
    border-bottom: 1px solid #0c6ac1;
    border-radius: 0px;
    width: 100%;
    transition: 0.8s all ease-in-out;
    grid-template-rows: 0.5fr 3fr 1fr;
  }
`;
const Heading = styled.div`
  border-bottom: 1px solid #0c6ac1;
  p {
    margin: 1.5rem 0 1rem 4rem;
    font-size: 1.2rem;
    color: #000;
    font-weight: bold;
  }
`;
const JobInfo = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  border-bottom: 1px solid #0c6ac1;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const JobDesc = styled.div`
  border-right: 1px solid #0c6ac1;
  @media screen and (max-width: 768px) {
    border: none;
  }
`;
const JobName = styled.div`
  margin: 1rem 0 1rem 4rem;
  font-size: 1.2rem;
  font-weight: 500;
`;
const Divi = styled.div`
  display: flex;
  margin: 0 4rem;
  align-items: center;
  align-content: center;
`;
const Category = styled.p`
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.1);
  color: darkgrey;
  padding: 0.2rem 0.5rem;
`;
const Posted = styled.p`
  color: rgba(0, 0, 0, 0.7);
  margin-left: 2rem;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const Desc = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 4rem;
  opacity: 0.8;
`;

const JobType = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2.5rem 2.5rem 0 2.5rem;
  @media screen and (max-width: 768px) {
    margin: 1rem 0 0 4rem;
  }
`;
const Level = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  span {
    margin-bottom: 0.2rem;
  }
`;
const Hour = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;
const Length = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;
const SkillAndExpert = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  p {
    margin: 1rem 0 0 4rem;
    font-size: 1.1rem;
    font-weight: bold;
    @media screen and (max-width: 768px) {
      margin: 2rem 0 0 4rem;
    }
  }
`;
const SkillDiv = styled.div`
  display: flex;
  margin: 0.2rem 4rem 2rem 4rem;
  overflow-x: scroll;
`;
const SubmitProp = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 1fr 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 80%;
  min-height: 400px;
  height: auto;
  margin: 2rem auto 0 auto;
  border: 1px solid #0c6ac1;
  border-radius: 5px;
  background-color: #fff;
  @media screen and (max-width: 768px) {
    border-radius: 0px;
    width: 100%;
    transition: 0.8s all ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const HourRate = styled.div`
  border-bottom: 1px solid #0c6ac1;
  display: flex;
  align-items: center;
  p {
    margin-left: 3rem;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
      margin: 0.5rem 3rem;
    }
  }
`;

const InputField = styled.input`
  border-radius: 8px;
  margin-left: 3rem;
  height: 25px;
  text-align: right;
  padding-right: 0.5rem;
  background-color: transparent;
  &:hover {
    border: 1px solid #0c6ac1;
  }
  @media screen and (max-width: 768px) {
    margin: 0.5rem 3rem;
  }
`;
const CoverLetter = styled.div`
  border-bottom: 1px solid #0c6ac1;
  margin: 1rem 0;
  p {
    margin-left: 2rem;
    font-size: 14px;
    color: #222222;
  }
`;
const InputCover = styled.textarea`
  margin: 1rem 2rem;
  padding: 1rem;
  min-height: 75px;
  width: 80%;
  border-radius: 12px;
  @media screen and (max-width: 768px) {
    margin: 1rem 1rem;
  }
`;
const Attachments = styled.div`
  border-bottom: 1px solid #0c6ac1;
  margin: 1rem 0;
  p {
    margin-left: 2rem;
    font-size: 14px;
    color: #222222;
  }
`;

const InputAttach = styled.input`
  margin: 1rem 2rem;
`;
const GroupButton = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 2rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const SubmitButton = styled.button`
  border: 1px solid #0c6ca1;
  border-radius: 160px;
  background-color: #0c6ca1;
  color: #ecf7fc;
  padding: 0.5rem 1rem;
  text-align: center;
  margin: 0rem 2rem 0.5rem 0;
  font-size: 15px;
  width: 160px;
  cursor: pointer;
  &:hover {
    border: 1px solid #0c6ca1;
    background-color: #ecf7fc;
    color: #0c6ca1;
  }
`;
const CancelButton = styled.button`
  border: 1px solid red;
  border-radius: 160px;
  background-color: #fff;
  color: red;
  padding: 0.5rem 1rem;
  text-align: center;
  margin: 0rem 2rem 0.5rem 0;
  font-size: 15px;
  width: 160px;
  cursor: pointer;
  &:hover {
    border: 1px solid red;
    background-color: red;
    color: #fff;
  }
`;

const SubmitProposal = () => {
  return (
    <>
      <Title>Submit A Proposal</Title>
      <JobDetails>
        <Heading>
          <p>Job Details</p>
        </Heading>
        <JobInfo>
          <JobDesc>
            <JobName>Javascript/NodeJS Developer Needed</JobName>
            <Divi>
              <Category>Full Stack Development</Category>
              <Posted>
                Posted<span>Mar 19,2022</span>
              </Posted>
            </Divi>
            <Desc>
              Looking for a javascript/node developer to build GraphQL resolvers
              that are utilizing MongoDB as a datastore and Netlify’s AWS lambda
              functions in a serverless environment. Environment is already set
              up and running; we just need the resolvers to be built so that
              queries provide proper data.
            </Desc>
          </JobDesc>
          <JobType>
            <Level>
              <span>Expert</span>
              <p>Experience Level</p>
            </Level>
            <Hour>
              <p>$35.00-$75.00</p>
              <p>Hourly Range</p>
            </Hour>
            <Length>
              <p>More than 6 months</p>
              <p>Project Length</p>
            </Length>
          </JobType>
        </JobInfo>
        <SkillAndExpert>
          <p>Skill And Expertise</p>
          <SkillDiv>
            <ButtonSkill />
            <ButtonSkill />
            <ButtonSkill />
          </SkillDiv>
        </SkillAndExpert>
      </JobDetails>
      <SubmitProp>
        <HourRate>
          <p>Your Rate:</p>
          <InputField placeholder="$5.00" />
        </HourRate>
        <CoverLetter>
          <p>Cover Letter</p>
          <InputCover required />
        </CoverLetter>
        <Attachments>
          <p>Attachments</p>
          <InputAttach type="file" />
        </Attachments>
        <GroupButton>
          <SubmitButton>Submit a Proposal</SubmitButton>
          <CancelButton>Cancel</CancelButton>
        </GroupButton>
      </SubmitProp>
    </>
  );
};

export default SubmitProposal;

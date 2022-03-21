import React from "react";
import styled from "styled-components";
import TypesButton from "./TypesButton";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Heading = styled.h5`
  padding: 2rem 0rem 2.5rem 9rem;
  font-size: 1.5rem;
  font-weight: 700;
  opacity: 0.9;
  @media screen and (max-width: 768px) {
    display: none;
    transform: translateY(-100%);
  }
`;

const Container = styled.div`
  width: 80%;
  height: 80%;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #87ceeb;
  opacity: 0.8;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 6px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    transition: 0.8s all ease;
    border: none;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
  }
`;

const LargeContainer = styled.div`
  border-right: 1px solid #87ceeb;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    border: none;
  }
`;

const JobDiv = styled.div`
  border-bottom: 1px solid #87ceeb;
`;

const JobTitle = styled.h5`
  margin: 1rem 2rem 1rem 4rem;
  font-size: 1.2rem;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
`;

const Description = styled.p`
  margin: 1rem 2rem 1rem 4rem;
  font-size: 1rem;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
`;

const PriceAndLevel = styled.div`
  border-bottom: 1px solid #87ceeb;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Price = styled.p`
  margin: 1rem 0;
`;

const Level = styled.p`
  margin: 1rem 0;
`;

const ProjectType = styled.p`
  margin: 1rem 0 1rem 4rem;
  span {
    font-weight: bold;
  }
`;

const SkillsAndExpert = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #87ceeb;
  align-items: flex-start;
`;

const SkillExpert = styled.p`
  margin: 1rem 0 1rem 4rem;
  font-weight: bold;
`;

const Category = styled.p`
  margin: 1rem 0 0 4rem;
  font-weight: bold;
`;

const GroupButton = styled.div`
  margin: 0.3rem 0 1.2rem 4rem;
`;

const Activity = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0 4rem;
`;

const ActJob = styled.p`
  margin: 1rem 0;
  font-size: 1.2rem;
  color: black;
  font-weight: bold;
`;

const Prop = styled.p`
  margin: 0.8rem 0;
`;
const Interview = styled.p`
  margin: 0.8rem 0;
`;
const Invite = styled.p`
  margin: 0.8rem 0;
`;
const Unanswered = styled.p`
  margin: 0.8rem 0;
`;

const SmallContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
`;

const FirstContainer = styled.div`
  border-bottom: 1px solid #87ceeb;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
`;

const SubmitButton = styled.button`
  border: 1px solid #ecf7fc;
  border-radius: 160px;
  background-color: #aef5ff;
  color: #ecf7fc;
  padding: 0.5rem 1rem;
  text-align: center;
  margin: 1.5rem auto 0.5rem auto;
  font-size: 15px;
  width: 160px;
  cursor: pointer;
  &:hover {
    border: 1px solid #aef5ff;
    background-color: #ecf7fc;
    color: #aef5ff;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const BookMark = styled.button`
  border: 1px solid #aef5ff;
  border-radius: 160px;
  background-color: #ecf7fc;
  color: #aef5ff;
  padding: 0.5rem 1rem;
  text-align: center;
  margin: 0.5rem auto 1.5rem auto;
  font-size: 15px;
  width: 160px;
  cursor: pointer;
  &:hover {
    border: 1px solid #ecf7fc;
    background-color: #aef5ff;
    color: #ecf7fc;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const SecondContainer = styled.div`
  border-bottom: 1px solid rgba(10, 25, 35, 0.7);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: -65px;
`;

const About = styled.h5`
  margin-top: 1.3rem;
  font-size: 1.2rem;
  font-weight: 600;
  margin-left: 2rem;
  margin-bottom: 1rem;
`;

const Payement = styled.p`
  font-weight: 200;
  margin-left: 2rem;
  margin-bottom: 1rem;
`;

const Country = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin-left: 2rem;
  margin-bottom: 0.2rem;
`;

const Con = styled.div`
  display: flex;
  margin-left: 2rem;
  margin-bottom: 1rem;
`;

const Name = styled.p`
  margin-right: 0.5rem;
`;

const Posted = styled.p``;

const JobPosted = styled.h5`
  font-size: 1.2rem;
  font-weight: 600;
  margin-left: 2rem;
  margin-bottom: 0.2rem;
`;

const Jp = styled.div`
  display: flex;
  margin-left: 2rem;
  margin-bottom: 1rem;
`;

const HireRate = styled.p``;

const OpenJob = styled.p``;

const Education = styled.h5`
  font-size: 1.2rem;
  font-weight: 600;
  margin-left: 2rem;
  margin-bottom: 1rem;
`;

const Member = styled.p`
  font-weight: 200;
  margin-left: 2rem;
  margin-bottom: 1rem;
`;

const ThirdContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const JobLink = styled.h5`
  margin-top: 1.3rem;
  font-size: 1.2rem;
  font-weight: 600;
  margin-left: 2rem;
  margin-bottom: 1rem;
`;

const InputField = styled.input`
  width: 62%;
  padding: 1rem 1.5rem;
  margin-left: 2rem;
  margin-bottom: 0.5rem;
  cursor: not-allowed;
`;

const CopyLink = styled.p`
  margin-left: 2rem;
  color: #aef5ff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const JobDetails = () => {
  return (
    <MainContainer>
      <Heading>Job Details</Heading>
      <Container>
        <LargeContainer>
          <JobDiv>
            <JobTitle>Hello World</JobTitle>
          </JobDiv>
          <JobDiv>
            <Description>
              Hi, looking for MT5 coder to code a simple day low indicator. I
              will provide more information upon submission of your proposal.
            </Description>
          </JobDiv>
          <PriceAndLevel>
            <Price>$60</Price>
            <Level>Intermediate</Level>
          </PriceAndLevel>
          <JobDiv>
            <ProjectType>
              <span>Project Type: </span>
              One-time project
            </ProjectType>
          </JobDiv>
          <SkillsAndExpert>
            <SkillExpert>Skills and Expertise</SkillExpert>
            <Category>Scripting & Automation Skills</Category>
            <GroupButton>
              <TypesButton />
            </GroupButton>
          </SkillsAndExpert>
          <Activity>
            <ActJob>Activity on this job</ActJob>
            <Prop>Proposals: Less than 5</Prop>
            <Interview>Interviewing: 0</Interview>
            <Invite>Invites sent: 0</Invite>
            <Unanswered>Unanswered invites: 0</Unanswered>
          </Activity>
        </LargeContainer>
        <SmallContainer>
          <FirstContainer>
            <SubmitButton>Submit a Proposal</SubmitButton>
            <BookMark>Save Job</BookMark>
          </FirstContainer>
          <SecondContainer>
            <About>About the client</About>
            <Payement>Payment method not verified</Payement>
            <Country>Jordan</Country>
            <Con>
              <Name>Amman</Name>
              <Posted>10.34pm</Posted>
            </Con>
            <JobPosted>1 job posted</JobPosted>
            <Jp>
              <HireRate>0% hire rate,</HireRate>
              <OpenJob>1 open job</OpenJob>
            </Jp>
            <Education>Education</Education>
            <Member>Member since Mar 18, 2022</Member>
          </SecondContainer>
          <ThirdContainer>
            <JobLink>Job link</JobLink>
            <InputField
              value="https://www.upwork.com/jobs/~0164284a27b7bfaa27"
              disabled
            />

            <CopyLink>Copy link</CopyLink>
          </ThirdContainer>
        </SmallContainer>
      </Container>
    </MainContainer>
  );
};

export default JobDetails;

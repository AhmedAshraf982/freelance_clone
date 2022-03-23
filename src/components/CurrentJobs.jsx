import React, { useState } from "react";
import styled from "styled-components";
import CurrentJob from "./CurrentJob";

const Container = styled.div`
  width: 80%;
  height: 50%;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
  opacity: 0.8;
  @media screen and (max-width: 768px) {
    border: none;
    margin-bottom: 0;
    bordr-shadow: none;
    width: 100%;
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
  height: 250px;
  overflow-y: scroll;
  flex-direction: column;
  padding: 1rem;
  border-top: 1px solid #0c6ac1;
  border-radius: 0px;
  @media screen and (max-width: 768px) {
    width: 100%;
    border: none;
    border-radius: 0;
    transition: 0.8s all ease-in-out;
  }
`;

const CurrentJobs = () => {
  const [arr, setarr] = useState([]);
  return (
    <>
      {arr.length == 0 && (
        <Container>
          <Heading>Current Jobs</Heading>
          <MinContainer>
            <CurrentJob />
          </MinContainer>
        </Container>
      )}
    </>
  );
};

export default CurrentJobs;

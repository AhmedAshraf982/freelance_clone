import React from "react";
import styled from "styled-components";

const Conversations = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: rgb(245, 243, 243);
  }
`;

const ImageCon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const Name = styled.span`
  font-weight: 500;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Conversation = () => {
  return (
    <>
      <Conversations>
        <ImageCon
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
          alt=""
        />
        <Name>Ahmed Name</Name>
      </Conversations>
    </>
  );
};

export default Conversation;

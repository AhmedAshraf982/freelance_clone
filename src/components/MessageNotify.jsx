import React from "react";
import styled from "styled-components";

const MessageBorder = styled.div`
  width: 100%;
  height: 50px;
  background-color: transparent;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #aef5f5;
  }
`;

const Image = styled.img`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-left: 1rem;
`;

const MinContainer = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
`;

const ClientName = styled.h5`
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
`;

const MessageName = styled.p`
  font-size: 0.9rem;
  text-align: left;
`;

const MessageNotify = () => {
  return (
    <MessageBorder>
      <Image
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
        alt="ClientImage"
      />
      <MinContainer>
        <ClientName>Ahmed</ClientName>
        <MessageName>
          {"HellloWodjbvdhvdvdjbvjdfgvjdbvjhdgbvjdf".slice(0, 20)}
        </MessageName>
      </MinContainer>
    </MessageBorder>
  );
};

export default MessageNotify;

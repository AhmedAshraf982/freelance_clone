import React from "react";
import styled from "styled-components";

const Message = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: ${(props) => (props.own ? "flex-end" : "flex-start")};
`;

const MessageTop = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const MessageText = styled.p`
  padding: 10px;
  border-radius: 20px;
  background-color: ${(props) => (props.own ? "rgb(245,241,241)" : "#0c6ac1")};
  color: ${(props) => (props.own ? "black" : "white")};
  max-width: 300px;
`;

const MessageBottom = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;

const Messages = (props) => {
  return (
    <>
      <Message own={props.own}>
        <MessageTop>
          <Image
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
            alt=""
          />
          <MessageText own={props.own}>Hello this is a message</MessageText>
        </MessageTop>
        <MessageBottom>1 hour ago</MessageBottom>
      </Message>
    </>
  );
};

export default Messages;

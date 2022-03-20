import React from "react";
import styled from "styled-components";
import Conversation from "./Conversation";
import Messages from "./Messages";

const Messenger = styled.div`
  height: calc(100vh-80px);
  display: flex;
`;

const ChatMenu = styled.div`
  flex: 3.5;
  @media screen and (max-width: 768px) {
    flex: 2;
  }
`;

const ChatBox = styled.div`
  flex: 6.5;
  @media screen and (max-width: 768px) {
    flex: 10;
  }
`;

const ChatMenuWrapper = styled.div`
  padding: 10px;
  height: 100%;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px 0;
  border: none;
  border-bottom: 1px solid grey;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ChatBoxWrapper = styled.div`
  padding: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-direction: space-between;
  position: relative;
`;

const ChatBoxTop = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding-right: 10px;
`;
const ChatBoxBottom = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputArea = styled.textarea`
  width: 80%;
  height: 90px;
  padding: 10px;
`;

const SendButton = styled.button`
  width: 70px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: teal;
  color: white;
`;

const Message = () => {
  return (
    <Messenger>
      <ChatMenu>
        <ChatMenuWrapper>
          <InputField type="text" placeholder="Search" />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
        </ChatMenuWrapper>
      </ChatMenu>
      <ChatBox>
        <ChatBoxWrapper>
          <ChatBoxTop>
            <Messages />
            <Messages own={true} />
            <Messages />
            <Messages />
            <Messages own={true} />
            <Messages />
            <Messages />
            <Messages own={true} />
            <Messages />
            <Messages />
            <Messages own={true} />
            <Messages />
            <Messages />
            <Messages own={true} />
            <Messages />
            <Messages />
            <Messages own={true} />
            <Messages />
          </ChatBoxTop>
          <ChatBoxBottom>
            <InputArea placeholder="write something..." value={""} />
            <SendButton>Send</SendButton>
          </ChatBoxBottom>
        </ChatBoxWrapper>
      </ChatBox>
    </Messenger>
  );
};

export default Message;

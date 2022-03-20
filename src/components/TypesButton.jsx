import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 20px;
  padding: 0.4rem 0.6rem;
  margin-right: 0.6rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const TypesButton = () => {
  return <Button>Bootstrap</Button>;
};

export default TypesButton;

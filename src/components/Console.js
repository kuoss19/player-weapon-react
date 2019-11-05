import React from 'react';
import styled from 'styled-components';

const ConsoleWrapper = styled.div`
  width: 80%;
  min-height: 360px;
  margin: 0 auto;
  padding: 5px;
  border: 1px solid black;
  border-radius: 8px;
`;

const ConsoleText = styled.p`
  font-weight: ${props => (props.emphasize ? 'bold' : 'normal')};
  color: ${props => (props.color ? props.color : 'black')};
`;

export default function Console({ messages }) {
  return (
    <ConsoleWrapper>
      {messages.map(({ text, ...value }, index) => (
        <ConsoleText key={index} {...value}>
          {text}
        </ConsoleText>
      ))}
    </ConsoleWrapper>
  );
}

import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Title>Player - Weapon React</Title>
    </HeaderWrapper>
  );
}

import React from 'react';
import styled from 'styled-components/native';

const XiteHeader = () => {
  return (
    <Container>
      <XiteLogo source={require('../images/logo.png')} />
    </Container>
  );
};

const Container = styled.View`
  border-width: 2px;
  border-color: black;
  background-color: black;
  height: 64px;
  flex-direction: row;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
const XiteLogo = styled.Image`
  align-self: center;
`;

export default XiteHeader;

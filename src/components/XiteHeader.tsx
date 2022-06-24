import React from 'react';
import styled from 'styled-components/native';
import {headerHeight} from '../constants';
import {images} from '../images';
import XiteTextInput from './XiteTextInput';

interface IXiteHeader {
  onChangeText: (text: string) => void;
}

const XiteHeader = ({onChangeText}: IXiteHeader) => {
  return (
    <Container>
      <XiteLogo source={images.logo} />
      <SearchBar onChangeText={onChangeText} />
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${headerHeight}px;
  background-color: black;
  border-width: 2px;
  border-color: black;
`;
const XiteLogo = styled.Image`
  width: 50px;
  height: 30px;
`;

const SearchBar = styled(XiteTextInput)`
  width: 200px;
  height: 30px;
  background-color: white;
  flex: 1;
  margin-left: 24px;
  margin-right: 24px;
`;
export default XiteHeader;

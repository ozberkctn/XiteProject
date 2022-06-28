import React from 'react';
import styled from 'styled-components/native';

import {images} from '../images';
import XiteTextInput from './XiteTextInput';

interface IXiteHeader {
  onChangeText: (text: string) => void;
  testID?: string;
}

const XiteHeader = ({onChangeText, testID}: IXiteHeader) => {
  return (
    <Container testID={testID}>
      <XiteLogo source={images.logo} testID={`${testID}-logo`} />
      <SearchBar onChangeText={onChangeText} testID={`${testID}-search-bar`} />
    </Container>
  );
};

const Container = styled.View`
  padding-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

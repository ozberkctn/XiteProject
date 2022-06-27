import React from 'react';
import {iOSColors, material} from 'react-native-typography';
import {CSSObject} from 'styled-components';
import styled from 'styled-components/native';
import XiteText from './XiteText';

interface IError {
  err?: string;
  testID?: string;
}

const Error = ({err, testID}: IError) =>
  err ? <CustomXiteText testID={testID}>{err}</CustomXiteText> : null;

const CustomXiteText = styled(XiteText)`
  ${material.body1Object as CSSObject}
  color: ${iOSColors.red}
`;

export default Error;

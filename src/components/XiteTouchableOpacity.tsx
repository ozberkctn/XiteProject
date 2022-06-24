import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

const XiteTouchableOpacity = (props: TouchableOpacityProps) => (
  <TouchableOpacity activeOpacity={0.89} {...props} />
);

export default XiteTouchableOpacity;

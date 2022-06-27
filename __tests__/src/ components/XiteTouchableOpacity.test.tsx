/**
 * @format
 */

import 'react-native';
import React from 'react';
import '@testing-library/jest-native';
import {render} from '@testing-library/react-native';
import XiteTouchableOpacity from '../../../src/components/XiteTouchableOpacity';

it('Check touchable component works correctly', () => {
  const {getByTestId} = render(
    <XiteTouchableOpacity testID="touchable-test" />,
  );
  getByTestId('touchable-test');
});

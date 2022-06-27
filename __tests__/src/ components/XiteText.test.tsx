/**
 * @format
 */

import 'react-native';
import React from 'react';
import '@testing-library/jest-native';
import {render} from '@testing-library/react-native';
import XiteText from '../../../src/components/XiteText';

it('Check text component works correctly', () => {
  const {getByText} = render(<XiteText>Test</XiteText>);
  getByText('Test');
});

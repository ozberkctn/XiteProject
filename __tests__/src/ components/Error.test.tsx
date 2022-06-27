/**
 * @format
 */

import 'react-native';
import React from 'react';
import '@testing-library/jest-native';
import {render} from '@testing-library/react-native';
import Error from '../../../src/components/Error';

it('Check err is visible', () => {
  const {getByText} = render(<Error err="error occured" />);
  getByText('error occured');
});

it('Check err is not visible', () => {
  const {queryByTestId} = render(<Error testID="error-test" />);
  expect(queryByTestId('error-test')).toBeNull();
});

/**
 * @format
 */

import 'react-native';
import React from 'react';
import '@testing-library/jest-native';
import {render} from '@testing-library/react-native';
import XiteSpinner from '../../../src/components/XiteSpinner';

it('Check spinner is visible', () => {
  const {getByTestId} = render(
    <XiteSpinner visible="loading" testID="spinner-test" />,
  );
  getByTestId('spinner-test');
});

it('Check spinner is not visible', () => {
  const {queryByTestId} = render(<XiteSpinner testID="spinner-test" />);
  expect(queryByTestId('spinner-test')).toBeNull();
});

/**
 * @format
 */

import 'react-native';
import React from 'react';
import '@testing-library/jest-native';
import {fireEvent, render} from '@testing-library/react-native';
import XiteHeader from '../../../src/components/XiteHeader';

it('Check header is visible', () => {
  const onChangeFunc = jest.fn();
  const {getByTestId} = render(
    <XiteHeader onChangeText={onChangeFunc} testID="header-test" />,
  );
  getByTestId('header-test');
  getByTestId('header-test-logo');
  getByTestId('header-test-search-bar');
  fireEvent.changeText(getByTestId('header-test-search-bar'), 'Test');
  expect(onChangeFunc).toHaveBeenCalled();
});

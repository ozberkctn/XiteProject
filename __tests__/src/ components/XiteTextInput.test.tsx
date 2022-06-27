/**
 * @format
 */

import 'react-native';
import React from 'react';
import '@testing-library/jest-native';
import {fireEvent, render} from '@testing-library/react-native';
import XiteTextInput from '../../../src/components/XiteTextInput';

it('Check textinput component works correctly', () => {
  const onChangeFunc = jest.fn();
  const {getByTestId} = render(
    <XiteTextInput onChangeText={onChangeFunc} testID="textinput-test" />,
  );
  fireEvent.changeText(getByTestId('textinput-test'), 'Test');
  expect(onChangeFunc).toHaveBeenCalled();
});

/**
 * @format
 */

import 'react-native';
import React from 'react';
import '@testing-library/jest-native';
import {fireEvent, render} from '@testing-library/react-native';
import GenreItem from '../../../../../src/screens/VideosScreen/components/GenreItem';

const sampleGenre = {
  id: 1,
  name: 'Pop',
  state: false,
};

it('Check genre item is visible clickable and unselected', () => {
  const genrePressMock = jest.fn();
  const {getByTestId, getByText} = render(
    <GenreItem
      testID="genreitem-test"
      item={sampleGenre}
      onGenrePress={genrePressMock}
    />,
  );
  getByTestId('genreitem-test');
  getByText('Pop');
  expect(getByTestId('genreitem-test')).toHaveStyle({backgroundColor: 'white'});
  fireEvent.press(getByTestId('genreitem-test'));
  expect(genrePressMock).toHaveBeenCalled();
  expect(getByTestId('genreitem-test')).toHaveStyle({backgroundColor: 'gray'});
});

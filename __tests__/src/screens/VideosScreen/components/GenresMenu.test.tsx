/**
 * @format
 */

import 'react-native';
import React from 'react';
import '@testing-library/jest-native';
import {fireEvent, render} from '@testing-library/react-native';
import {MemoizedGenres} from '../../../../../src/screens/VideosScreen/components/GenresMenu';
import {Genre} from '../../../../../src/apiTypes';

const samples: Genre[] = [
  {
    id: 1,
    name: 'Pop',
    state: false,
  },
  {
    id: 2,
    name: 'Jazz',
    state: false,
  },
  {
    id: 3,
    name: 'Blues',
    state: true,
  },
];

it('Check genre menu is visible', () => {
  const genrePressMock = jest.fn();
  const {getByText} = render(
    <MemoizedGenres onGenrePress={genrePressMock} genres={samples} />,
  );
  getByText('Pop');
  getByText('Blues');
  getByText('Jazz');
  fireEvent.press(getByText('Pop'));
  expect(genrePressMock).toHaveBeenCalled();
});

/**
 * @format
 */

import 'react-native';
import React from 'react';
import '@testing-library/jest-native';
import VideoScreen from '../../../../src/screens/VideosScreen/index';
import {renderWithProviders} from '../../../testUtils';
import {Genre, Video} from '../../../../src/apiTypes';

const sampleVideos: Video[] = [
  {
    id: 501437,
    artist: 'Pants Velour',
    title: 'All In',
    release_year: 2014,
    genre_id: 14,
    image_url:
      'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/501437/images/app/w522_h292.jpg',
  },
];

const sampleGenres: Genre[] = [
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

const initialState = {
  api: {
    videos: sampleVideos,
    genres: sampleGenres,
  },
};

const noVideosAndGenresInitialState = {
  api: {
    videos: [],
    genres: [],
  },
};

it('Check video screen renders correctly', () => {
  const {getByTestId, getByText} = renderWithProviders(
    <VideoScreen />,
    initialState,
  );
  getByTestId('video-list-container');
  getByTestId('video-list-test');
  getByText('Pop');
});

it('Check video video list not rendered', () => {
  const {queryByTestId, queryByText} = renderWithProviders(
    <VideoScreen />,
    noVideosAndGenresInitialState,
  );
  expect(queryByTestId('video-list-test')).toBeNull();
  expect(queryByText('Pop')).toBeNull();
});

/**
 * @format
 */

import 'react-native';
import React from 'react';
import '@testing-library/jest-native';
import {render} from '@testing-library/react-native';
import VideoItem from '../../../../../src/screens/VideosScreen/components/VideoItem';
import {Video} from '../../../../../src/apiTypes';

const sampleVideo: Video = {
  id: 501437,
  artist: 'Pants Velour',
  title: 'All In',
  release_year: 2014,
  genre_id: 14,
  image_url:
    'https://raw.githubusercontent.com/XiteTV/frontend-coding-exercise/679a82b1e7110c16e14412f1debaa118c10078a9/images/501437/images/app/w522_h292.jpg',
};

it('Check video item is visible', () => {
  const {getByTestId, getByText} = render(
    <VideoItem item={sampleVideo} testID="videoitem-test" />,
  );
  getByTestId('videoitem-test');
  getByTestId('videoitem-test-thumb');
  expect(getByTestId('videoitem-test-thumb')).toHaveProp('source', {
    uri: sampleVideo.image_url,
  });
  getByText(sampleVideo.title);
  getByText(sampleVideo.artist);
});

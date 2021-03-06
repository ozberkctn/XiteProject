/**
 * @format
 */

import 'react-native';
import React from 'react';
import '@testing-library/jest-native';
import {render} from '@testing-library/react-native';

import {Video} from '../../../../../src/apiTypes';
import {MemoizedVideoList} from '../../../../../src/screens/VideosScreen/components/VideoList';

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
//recyclerlistview does not support unit testing.
it('Check video list is visible', () => {
  const {getByTestId} = render(
    <MemoizedVideoList testID="videolist-test" data={sampleVideos} />,
  );
  getByTestId('videolist-test');
});

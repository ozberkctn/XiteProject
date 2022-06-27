import {isEmpty} from 'lodash';
import React, {useCallback, useEffect, useState} from 'react';
import {Animated} from 'react-native';
import {ScrollEvent} from 'recyclerlistview/dist/reactnative/core/scrollcomponent/BaseScrollView';
import styled from 'styled-components/native';
import {Video} from '../../apiTypes';
import Error from '../../components/Error';
import XiteHeader from '../../components/XiteHeader';
import XiteSpinner from '../../components/XiteSpinner';
import {headerHeight} from '../../constants';
import {
  error,
  genres,
  getVideos,
  isLoading,
  videos,
} from '../../redux/api-slice';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {MemoizedGenres} from './components/GenresMenu';
import {MemoizedVideoList} from './components/VideoList';

const VideosScreen = () => {
  const dispatch = useAppDispatch();
  const isLoadingState = useAppSelector(isLoading);
  const errorState = useAppSelector(error);
  const videosData = useAppSelector(videos);
  const genresData = useAppSelector(genres);
  const [searchResults, setSearchResults] = useState<Video[]>();
  const [genreFilters, setGenreFilters] = useState<number[]>([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, headerHeight);
  const translateY = diffClamp.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
  });

  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch]);

  const onVideoListScroll = (e: ScrollEvent) => {
    scrollY.setValue(e.nativeEvent.contentOffset.y);
  };

  //filter data when search text is changed or any genre item is selected or unselected
  useEffect(() => {
    setSearchResults(
      videosData?.filter((item: Video) => {
        let isKeywordMatch = false;
        let isGenreMatch = false;
        if (searchKeyword) {
          if (String(item.title).includes(searchKeyword)) {
            isKeywordMatch = true;
          }
        } else {
          isKeywordMatch = true;
        }
        if (!isEmpty(genreFilters)) {
          genreFilters.forEach(genre => {
            if (genre === item.genre_id) {
              isGenreMatch = true;
            }
          });
        } else {
          isGenreMatch = true;
        }
        if (isKeywordMatch && isGenreMatch) {
          return item;
        }
      }),
    );
  }, [searchKeyword, genreFilters, videosData]);

  const onGenrePress = useCallback(
    (genreId: number, state: boolean) => {
      if (state) {
        setGenreFilters([...genreFilters, genreId]);
      } else {
        setGenreFilters(genreFilters.filter(id => id !== genreId));
      }
    },
    [genreFilters],
  );

  const videoListIsNotEmpty = searchResults && !isEmpty(searchResults);

  return (
    <Container testID="video-list-container">
      <Error err={errorState} />
      <XiteSpinner visible={isLoadingState} />
      <AnimatedHeader style={{transform: [{translateY: translateY}]}}>
        <XiteHeader onChangeText={keyword => setSearchKeyword(keyword)} />
        <MemoizedGenres genres={genresData} onGenrePress={onGenrePress} />
      </AnimatedHeader>
      {videoListIsNotEmpty && (
        <MemoizedVideoList
          data={searchResults}
          onScroll={onVideoListScroll}
          testID="video-list-test"
        />
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const AnimatedHeader = styled(Animated.View)`
  z-index: 100;
  elevation: 4;
`;

export default VideosScreen;

import {isEmpty} from 'lodash';
import React, {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {Video} from '../../apiTypes';
import Error from '../../components/Error';
import XiteHeader from '../../components/XiteHeader';
import XiteSpinner from '../../components/XiteSpinner';
import XiteText from '../../components/XiteText';
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

  useEffect(() => {
    dispatch(getVideos());
  }, [dispatch]);

  //filter data when search text is changed or any genre item is selected or unselected
  useEffect(() => {
    const results = videosData?.filter((item: Video) => {
      let isKeywordMatch = false;
      let isGenreMatch = false;
      if (searchKeyword) {
        if (
          String(item.title).toLowerCase().includes(searchKeyword.toLowerCase())
        ) {
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
    });
    setSearchResults(results);
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
      <XiteHeader onChangeText={keyword => setSearchKeyword(keyword)} />
      <MemoizedGenres genres={genresData} onGenrePress={onGenrePress} />
      {videoListIsNotEmpty && (
        <MemoizedVideoList data={searchResults} testID="video-list-test" />
      )}
      {!isEmpty(videosData) && !videoListIsNotEmpty && (
        <NoDataText>No data to show</NoDataText>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`;

const NoDataText = styled(XiteText)``;

export default VideosScreen;

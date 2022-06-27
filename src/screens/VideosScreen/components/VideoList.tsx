import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import {Video} from '../../../apiTypes';
import VideoItem from './VideoItem';
import isEqual from 'lodash/isEqual';
import {getVideoItemDimensions, headerHeight} from '../../../constants';
import {ScrollEvent} from 'recyclerlistview/dist/reactnative/core/scrollcomponent/BaseScrollView';
import {ScrollViewProps, StyleSheet} from 'react-native';

const ListItemType = 'default item';
interface IVideoList {
  data: Video[];
  onScroll?:
    | ((rawEvent: ScrollEvent, offsetX: number, offsetY: number) => void)
    | undefined;
  testID?: string;
}

const scrollProps: ScrollViewProps = {
  keyboardShouldPersistTaps: 'always',
  bounces: false,
  keyboardDismissMode: 'on-drag',
};
const descriptionViewHeight = 75;
const genresMenuHeight = 54;

const renderItem = ({item}: {item: Video}) => <VideoItem item={item} />;

const prepareDataForRecyclerList = (data: Video[]) => {
  return data.map(item => {
    return {type: ListItemType, values: item};
  });
};

const getDataProviderWithData = (data: Video[]) =>
  new DataProvider((r1, r2) => {
    return r1 !== r2;
  }).cloneWithRows(prepareDataForRecyclerList(data));
const renderRow = (
  _: string | number,
  data: {type: string; values: Video},
): JSX.Element | null => {
  return renderItem({item: data.values});
};

function VideoList({data, onScroll, testID}: IVideoList) {
  const [videosProviderData, setVideosProviderData] = useState(
    getDataProviderWithData(data),
  );

  useEffect(() => {
    setVideosProviderData(getDataProviderWithData(data));
  }, [data]);

  const layoutProvider = new LayoutProvider(
    i => {
      return videosProviderData.getDataForIndex(i).type;
    },
    (_, dim) => {
      dim.width = getVideoItemDimensions().width;
      dim.height = getVideoItemDimensions().height + descriptionViewHeight;
    },
  );

  return (
    <Container testID={testID}>
      <RecyclerListView
        rowRenderer={renderRow}
        dataProvider={videosProviderData}
        layoutProvider={layoutProvider}
        scrollViewProps={scrollProps}
        onScroll={onScroll}
        style={styles.recyclerView}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const styles = StyleSheet.create({
  recyclerView: {paddingTop: headerHeight + genresMenuHeight},
});

function videoPropsAreEqual(prevVideo: IVideoList, nextVideo: IVideoList) {
  return isEqual(prevVideo.data, nextVideo.data);
}

export const MemoizedVideoList = React.memo(VideoList, videoPropsAreEqual);

import React from 'react';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import {Video} from '../../../apiTypes';
import {getVideoItemDimensions} from '../../../constants';
import {iOSColors, human} from 'react-native-typography';
import {CSSObject} from 'styled-components';

interface IVideoItem {
  item: Video;
  testID?: string;
}

const VideoItem = ({item, testID}: IVideoItem) => {
  return (
    <Container testID={testID}>
      <VideoThumb
        testID={`${testID}-thumb`}
        source={{uri: item.image_url}}
        resizeMode={FastImage.resizeMode.cover}
      />
      <DescriptionContainer>
        <VideoTitleText>{item.title}</VideoTitleText>
        <Row>
          <VideoArtisText>{item.artist}</VideoArtisText>
        </Row>
      </DescriptionContainer>
    </Container>
  );
};

const Container = styled.View`
  background-color: white;
`;
const VideoThumb = styled(FastImage)`
  width: ${getVideoItemDimensions().width}
  height: ${getVideoItemDimensions().height}
`;
const DescriptionContainer = styled.View`
  margin-left: 24px;
  margin-top: 12px;
  margin-bottom: 12px;
`;
const VideoTitleText = styled.Text`
  ${human.title3Object as CSSObject};
`;
const VideoArtisText = styled.Text`
  color: ${iOSColors.pink};
`;

const Row = styled.Text`
  flex-direction: row;
`;

export default VideoItem;

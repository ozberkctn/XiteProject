// MAIN_URL should be defined in env files if there would be sandbox and prod environments...
import {Dimensions} from 'react-native';
import {ScreenInfo} from 'react-native-responsive-grid';

export const MAIN_URL = 'https://raw.githubusercontent.com';
export const ROUTES = {
  VIDEOS: 'Videos',
};

export const screenDimension = Dimensions.get('screen');
export const videoItemWidths = {sm: 100, md: 100, lg: 50, xl: 33};
export const videoItemHeights = {sm: 200, md: 200, lg: 500, xl: 500};

export const getVideoItemDimensions = () => {
  return {
    width:
      (videoItemWidths[ScreenInfo().mediaSize] * screenDimension.width) / 100,
    height: videoItemHeights[ScreenInfo().mediaSize],
  };
};

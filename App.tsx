/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Router from './src/router';
import styled from 'styled-components/native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App: () => React.ReactNode = () => {
  return (
    <Provider store={store}>
      <SafeAreaViewContainer testID="app_safe_area_view">
        <Router />
      </SafeAreaViewContainer>
    </Provider>
  );
};

const SafeAreaViewContainer = styled.SafeAreaView`
  flex: 1;
`;

export default App;

import * as React from 'react';
import VideosScreen from './screens/VideosScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from './constants';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={ROUTES.VIDEOS} component={VideosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

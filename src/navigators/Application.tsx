import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenNavigation } from 'constants/screen-navigation';
import Startup from 'screens/Startup';
// import { NewsDetail, Startup, VideoDetail, CategoryDetail, CategoryVideoDetail } from 'screens';
// import BottomTab from './BottomTab';

const Stack = createStackNavigator();

function ApplicationNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenNavigation.Startup}
          component={Startup}
          options={{ headerShown: false, animationEnabled: false }}
        />
        {/* <Stack.Screen
          name={ScreenNavigation.Home}
          component={BottomTab}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <Stack.Screen
          name={ScreenNavigation.NewsDetail}
          component={NewsDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNavigation.VideoDetail}
          component={VideoDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNavigation.CategoryDetail}
          component={CategoryDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ScreenNavigation.CategoryVideoDetail}
          component={CategoryVideoDetail}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;

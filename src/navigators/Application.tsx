import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';

import { Startup } from 'screens';
import BottomTab from './BottomTab';
import { Navigator } from 'constants/Navigator';

const Stack = createStackNavigator();

function ApplicationNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Navigator.StartUp}
          component={Startup}
          options={{ headerShown: false, animationEnabled: false }}
        />
        <Stack.Screen
          name={Navigator.HomeStack}
          component={BottomTab}
          options={{ headerShown: false, animationEnabled: false }}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

export default ApplicationNavigator;

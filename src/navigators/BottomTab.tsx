import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarCustom } from 'components';
import { ScreenNavigation } from 'constants/screen-navigation';
import { Home, ScreenA, ScreenB, ScreenC } from 'screens';
// import { Colors } from 'styles';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      tabBar={props => <TabBarCustom {...props} />}
      screenOptions={{
        tabBarIconStyle: { color: '#000' },
      }}>
      <Tab.Screen
        name={ScreenNavigation.Home}
        component={Home}
        options={{
          headerShown: false,
          title: 'Home',
        }}
      />
      <Tab.Screen
        name={ScreenNavigation.ScreenA}
        component={ScreenA}
        options={{
          headerShown: false,
          title: 'Screen1',
        }}
      />
      <Tab.Screen
        name={ScreenNavigation.ScreenB}
        component={ScreenB}
        options={{
          headerShown: false,
          title: 'Screen2',
        }}
      />
      <Tab.Screen
        name={ScreenNavigation.ScreenC}
        component={ScreenC}
        options={{
          headerShown: false,
          title: 'Screen3',
        }}
      />
    </Tab.Navigator>
  );
}

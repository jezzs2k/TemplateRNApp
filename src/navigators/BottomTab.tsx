import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBarCustom } from 'components';
import { ScreenNavigation } from 'constants/screen-navigation';
import React from 'react';
import { Home } from 'screens';
// import { Colors } from 'styles';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      tabBar={props => <TabBarCustom {...props} />}
      screenOptions={{
        tabBarIconStyle: { color: '#000' },
      }}
    >
      <Tab.Screen
        name={ScreenNavigation.Home}
        component={Home}
        options={{
          headerShown: false,
          title: 'StampaPaese',
        }}
      />
    </Tab.Navigator>
  );
}

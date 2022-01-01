import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { ScreenNavigation } from 'constants/screen-navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { Colors, Theme } from 'styles';
import { isIOS } from 'common/Utilities';
import MyText from 'components/MyText';

const TabBarCustom = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const renderTabBarIcons = (name: string, isFocused: boolean) => {
    switch (name) {
      case ScreenNavigation.Home:
        return (
          <AntDesign
            name="home"
            color={isFocused ? Colors.white : Colors.textSecondary}
            size={17}
            style={styles.tabBarIcon}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={[Theme.boxShadow01, styles.tabBarContainer]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, { name: route.name, merge: true });
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[styles.tabItem, isFocused && styles.tabItemFocused]}
            key={index}>
            {renderTabBarIcons(route.name, isFocused)}
            <MyText style={isFocused ? styles.tabItemLabelFocused : styles.tabItemLabel}>
              {label}
            </MyText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom: 0,
    flexDirection: 'row',
    height: isIOS ? 77 : 60,
    justifyContent: 'space-around',
    left: 0,
    paddingHorizontal: 16,
    position: 'absolute',
    right: 0,
    shadowOffset: { width: 0, height: -1 },
  },
  tabItem: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 16,
    flexDirection: 'row',
    flexGrow: 1,
    height: 32,
    justifyContent: 'center',
    marginTop: 12,
  },
  tabItemFocused: {
    backgroundColor: Colors.secondaryColor,
  },
  tabItemLabel: { color: Colors.textSecondary },
  tabItemLabelFocused: { color: 'white' },
  tabBarIcon: { marginRight: 12 },
});

export default TabBarCustom;

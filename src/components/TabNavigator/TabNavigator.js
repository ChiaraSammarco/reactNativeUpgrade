import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
});

export default createAppContainer(TabNavigator);

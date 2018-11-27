import React from 'react';

// import DrawerScreen from './DrawerScreen';

// Navigators
import {
  createDrawerNavigator, createAppContainer} from 'react-navigation'

import Stack from '../StackNavigator/StackNavigator';
import Tab from '../BottomTabNavigator/BottomTabNavigator';
import Plain from './Plain'

const RouteConfigs = {
  Stack: {screen: Stack},
  Tabs: {screen: Tab},
  Plain: {screen: Plain}
};

const DrawerNavigatorConfig = {
  initialRouteName: 'Plain',
  drawerWidth: 300
};

const Drawer = createAppContainer(createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig));

export default Drawer;

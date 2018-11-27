import React from 'react';

// Navigators
import {
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation'

// TabNavigator screens
import TabA from './TabA';
import TabB from './TabB';
import TabC from './TabC';

const Tabs = createAppContainer(createBottomTabNavigator({
  TabA: { screen: TabA },
  TabB: { screen: TabB },
  TabC: { screen: TabC },
}, {
  order: ['TabA', 'TabB', 'TabC']
}));

export default Tabs;

import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator, TabBarBottom, createAppContainer } from 'react-navigation';

import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const iconsNames = (focused) => ({
  'Menu': `ios-apps`,
  'Home': `ios-information-circle${focused ? '' : '-outline'}`,
  'Settings': `ios-options`,
  'Add': `ios-add-circle${focused ? '' : '-outline'}`,
  'Profile': `ios-person`,
});

const TabNavigator = createAppContainer(createMaterialTopTabNavigator(
  {
    Home: { screen: HomeScreen },
    Menu: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
    Add: { screen: HomeScreen },
    Profile: { screen: HomeScreen },
  },
  {
    order: ['Home', 'Menu', 'Add', 'Profile', 'Settings'],
    animationEnabled: true,
    scrollEnabled: true,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        iconName = iconsNames(focused)[routeName];

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'black',
      activeTintBackground: 'red',
      inactiveTintBackground: 'blue',
      labelStyle: {
        fontSize: 12,
      },
      tabStyle: {
        width: 95,
        ':hover': {
          color: 'blue'
        }
      },
      style: {
        backgroundColor: 'grey',
      },
      indicatorStyle: {
        backgroundColor: 'black',
      },
      showIcon: true,
    },
    animationEnabled: false,
    swipeEnabled: false,
  }
));

export default TabNavigator;

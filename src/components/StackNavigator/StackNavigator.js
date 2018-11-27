import React from 'react';

// Navigators
import {
  createStackNavigator,
  createAppContainer} from 'react-navigation'

// StackNavigator screens
import ItemList from '../StackNavigator/ItemList'
import Item from '../StackNavigator/Item'

const Stack = createAppContainer(createStackNavigator({
  ItemList: { screen: ItemList },
  Item: { screen: Item },
}, {
  initialRouteName: 'ItemList',
}));

export default Stack;

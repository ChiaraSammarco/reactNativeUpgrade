/**
 * React Native Upgrade
 * https://github.com/ChiaraSammarco/reactNativeUpgrade
 **/

import React, {Component} from "react";

// import AppContainer from './Navigator/AppContainer';
import TabNavigator from './TabNavigator/TabNavigator';

export default class App extends Component {
  render() {
    return <TabNavigator />;
  }
}

/**
 * React Native Upgrade
 * https://github.com/ChiaraSammarco/reactNativeUpgrade
 **/

import React, {Component} from "react";

// import AppContainer from './Navigator/AppContainer';
// import TopTabNavigator from './TopTabNavigator/TopTabNavigator';
import Drawer from './ComplexNavigation/DrawerNavigator';

class App extends Component {
  render() {
    return <Drawer />;
  }
}

export default App;



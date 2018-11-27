import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import { DrawerActions } from 'react-navigation-drawer';

class TabA extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Tab A',
  });

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Text style={styles.buttonText}>Open Drawer</Text>
        </TouchableOpacity>
        <Text style={styles.text}>I'm Tab A</Text>
      </View>
    )
  }
}

export default TabA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0392b',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    top: 50,
    left: 0,
    width: 150,
    height: 50,
    backgroundColor: '#f39c12',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white'
  }
});


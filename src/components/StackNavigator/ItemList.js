import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';


const items = [
  { name: 'one'},
  { name: 'two'},
  { name: 'three'},
  { name: 'four'},
];

class ItemList extends Component {

  static navigationOptions = {
    title: 'Stack'
  };

  renderItem = (item, i) => {
    return (
      <View>
        <TouchableOpacity
          key={i}
          style={styles.item}
          onPress={() => this.props.navigation.navigate('Item', { title: item.name })}
        >
          <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    )
  };

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{`I'm a StackNavigator!`}</Text>
        {items.map(this.renderItem)}
      </View>
    )
  }
}

export default ItemList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8e44ad',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
});

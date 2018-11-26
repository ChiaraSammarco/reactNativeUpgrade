import React, {Component} from 'react';
import { View, Text, Button } from "react-native";


class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
    headerTitle: 'Logo',
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="red"
      />
    ),
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Jane's page"
          onPress={() => navigate('Details', {name: 'Jane'})}
        />

      </View>
    );
  }
}

export default HomeScreen;

import React, {Component} from 'react';
import { View, Text, Button } from "react-native";


class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    console.log(this.props);
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Details', {name: 'Jane'})}
        />

      </View>
    );
  }
}

export default HomeScreen;

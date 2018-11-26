import React, {Component} from 'react';
import { View, Text, Button } from "react-native";


class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigate('Home')}
        />
      </View>
    );
  }
}

export default DetailsScreen;

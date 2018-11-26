import React, {Component} from 'react';
import { View, Text, Button } from "react-native";


class DetailsScreen extends Component {
  static navigationOptions = {
    title: 'Details',
  };
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen Changed</Text>

        <Button
          title="Go to Home"
          onPress={() => navigate('Home')}
        />
      </View>
    );
  }
}

export default DetailsScreen;

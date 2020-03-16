import React, { Component } from 'react';
import { View, Text } from 'react-native';
import StackNavigator from './Components/StackNav';
import DrawerNav from './Components/Drawer';
import TabNavigator from './Components/TabNavigator';
import MovieDetails from './Components/Screen/MovieDetails';

class App extends Component {

  render() {
    return (
      <TabNavigator />
    );
  }
}

export default App;

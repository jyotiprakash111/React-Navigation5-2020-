import React, { Component } from 'react';
import { View, Text } from 'react-native';
import StackNavigator from './Components/StackNav';
import DrawerNav from './Components/Drawer';

class App extends Component {

  render() {
    return (
      <StackNavigator />
    );
  }
}

export default App;

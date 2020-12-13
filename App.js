import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Welcome from './screens/welcome';

export default class App extends React.Component{
  render(){
    return(
      <Welcome/>
    )
  }
}

// const SwitchNavigator = createSwitchNavigator({
//  Welcome: Welcome
// })

// const AppContainer = createAppContainer(SwitchNavigator);
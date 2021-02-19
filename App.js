import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { AppTabNavigator } from './components/AppTabNavigator';


export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>
  );
}
}

const switchNavigator = createSwitchNavigator({
BottomTab: {screen: AppTabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);

import React from 'react';
import { Platform, StyleSheet,Text, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';

import {StackNavigator} from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import LinksScreen from './screens/LinksScreen'
import SettingsScreen from './screens/SettingsScreen'


export default class App extends React.Component {
  render() {
  return (
    <AppStackNavigator />
  );
  }
}

const AppStackNavigator = new StackNavigator({
  HomeScreen:{screen:HomeScreen},
  LinksScreen:{screen:LinksScreen},
  SettingsScreen:{screen:SettingsScreen}
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
  },
});

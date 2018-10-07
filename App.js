import React from 'react';
import { Platform, StyleSheet,Text, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';

import {createStackNavigator} from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import LinksScreen from './screens/LinksScreen'
import SettingsScreen from './screens/SettingsScreen'
import ResultScreen from './screens/ResultScreen'


export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    });
  }
  
  
  render() {
  return (
    <AppStackNavigator />
  );
  }
}

const AppStackNavigator = new createStackNavigator({
  HomeScreen:{screen:HomeScreen},
  LinksScreen:{screen:LinksScreen},
  SettingsScreen:{screen:SettingsScreen},
  ResultScreen:{screen:ResultScreen}
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center',
  },
});

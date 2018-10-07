import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl, 
} from 'react-native';

import {
    BarChart,
  } from 'react-native-chart-kit'


import firebase from 'firebase';
import {DB_CONFIG} from '../Config/Config.js'; 
import { MonoText } from '../components/StyledText';
import LinksScreen from './LinksScreen';

export default class FinishScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      
      <View style ={styles.backgroundPage}>
      <Text style = {styles.titleText}>LunchMeet</Text>
      <View style = {styles.question}>
      <Text style = {styles.questionText}>BYEEEEEEEE</Text>

      <Image
              source={
                __DEV__
                  ? require('../assets/images/skyline.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          
     
      </View>
      </View>  
    );


  }

}

const styles = StyleSheet.create({
  welcomeImage: {
    width: 500,
    height: 200,
    resizeMode: 'contain',
    marginTop: 55,
    marginLeft: -60
  },
  
  questionText: {
    marginTop:70,
    fontSize:30,
    textAlign:'center',
    fontFamily: 'Montserrat-Regular'

  },

  question: {
    marginTop:30,
    height:190,
    backgroundColor:'#F5F5F5'

  },

  titleText: {
    marginTop:40,
    fontSize:30,
    color:'white',
    textAlign:'center',
    fontFamily: 'Montserrat-Bold'
  },
  
  backgroundPage: {
    flex: 1,
    backgroundColor: '#DA3743'
  },
  
  homeContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  

});

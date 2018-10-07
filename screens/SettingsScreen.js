import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Container, 
  Button
} from 'react-native';


import { MonoText } from '../components/StyledText';
import LinksScreen from './LinksScreen';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


 
  render() {
    return (
      
      <View style ={styles.backgroundPage}>
      
      <Text style = {styles.titleText}>LunchMeet</Text>
      
      <View style = {styles.question}>
      <Text style = {styles.questionText}>Whats your choice of lunch?</Text>
      
      </View>
      
      <View style = {styles.homeContainer}>
    
        <TouchableOpacity
            style={styles.container}
            onPress={()=>this.props.navigation.navigate('SettingsScreen')}>
            <Text style={styles.buttonText}>Vote</Text>
        </TouchableOpacity>
      

    
      <TouchableOpacity
            style={styles.container}
            onPress={()=>this.props.navigation.navigate('SettingsScreen')}>
            <Text style={styles.buttonText}>Vote</Text>
        </TouchableOpacity>
    


     
      <TouchableOpacity
            style={styles.container}
            onPress={()=>this.props.navigation.navigate('SettingsScreen')}>
            <Text style={styles.buttonText}>Vote</Text>
        </TouchableOpacity>
      


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
  
  container: {
    marginTop:20,
    height:60,
    width:340,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#DA3743',
    justifyContent:'center',
    padding:1,
    borderWidth:.2,
    marginLeft:20,
    borderColor: 'black'
  },
  
  buttonText:{
    fontSize:30,
    fontWeight:'bold',
    color:'white',
    justifyContent:'center',
    fontFamily: 'Montserrat-Regular'
  },

  
  buttonContainer: {
    flex:1,
    justifyContent:'center',
  },

});

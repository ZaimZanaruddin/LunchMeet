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
  Button
} from 'react-native';


import { MonoText } from '../components/StyledText';
import LinksScreen from './LinksScreen';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {text: "Test Input"};
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style = {styles.titleText}>LunchMeet</Text>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/hotdog.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          
          <View>
            <Button style= {styles.enterButton}
              onPress ={()=>this.props.navigation.navigate('LinksScreen')}
              title="Create a Poll"
              color="white"
              accessibilityLabel="Learn more about this purple button"
              
            />
        </View>
        </View>
          <View>
            <TextInput
              style={styles.inputText}
              keyboardType='numeric'
              onChangeText={(text) => this.setState({input: text})}
              value={this.state.myNumber}
              maxLength={10}
              placeholder="Poll PIN"
              placeholderTextColor='gray'
            />
          </View>
          
        <View style={styles.buttonContainer}>
            <TouchableOpacity
            style={styles.buttonLook}
            onPress={()=>this.props.navigation.navigate('SettingsScreen')}>
            <Text style={styles.buttonText}> Enter</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DA3743',
  },

  titleText: {
    marginTop:40,
    fontSize:30,
    color:'white',
    textAlign:'center',
    fontWeight:'bold'
  },
  
  buttonText:{
    fontSize:30,
    fontWeight:'bold',
    color:'white',
  },
  
  buttonContainer: {
    flex:1,
    justifyContent:'center',
    padding:1,
  },

  buttonLook: {
    alignItems: 'center',
    width:250,
    height:60,
    backgroundColor: '#27A2C4',
    padding: 10,
    marginLeft:60,
    marginTop: -250
  },
  
  inputText: {
    height: 60, 
    width: 250, 
    borderColor: 'black',  
    backgroundColor:'white', 
    marginLeft: 60,
    textAlign: 'center',
    fontSize: 25,
    fontWeight:'bold'
  },
  
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 160,
    resizeMode: 'contain',
    marginTop: 100,
    marginLeft: -5,
  },
  
});

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
import { WebBrowser } from 'expo';

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
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
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
  
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

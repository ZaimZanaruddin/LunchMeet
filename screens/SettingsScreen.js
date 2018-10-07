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
import firebase from 'firebase';
import {DB_CONFIG} from '../Config/Config.js'; 
import { MonoText } from '../components/StyledText';
import LinksScreen from './LinksScreen';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {restaurant: [], votes: []};
    this.restaurant;
    
  }

  componentDidMount() {
    firebase.initializeApp(DB_CONFIG);
    for( let i = 1; i <= 3; i++)
    {
      let temp = String(i);
      firebase.database().ref('pin/1001/res'+temp+'/name').on('value', snapshot => {
        console.log(snapshot.val()+ ' is good');
        this.rest = snapshot.val();
        var newState = this.state.restaurant.slice();
        newState.push(this.rest);
        this.setState({
          restaurant: newState
        })
      });
      firebase.database().ref('pin/1001/res'+temp+'/votes').on('value', snapshot => {
        
        
        this.vote = parseInt(snapshot.val());
        var newState = this.state.votes.slice();
        newState.push(this.vote);
        this.setState({
          votes: newState
        })
      });
    }
    
    firebase.database().ref('identifier').set(
      {
          pin: '10001',
          
      }
    ).then(() => {
        console.log('INSERTED !');
    }).catch((error) => {
        console.log(error);
    });
    
  }
 
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
            onPress={()=>incrementCount(this.state.votes[0], 0)}
            onPress={()=>this.props.navigation.navigate('ResultScreen')}>
            <Text style={styles.buttonText}>{this.state.restaurant[0]}</Text>
        </TouchableOpacity>
      

    
      <TouchableOpacity
            style={styles.container}
            onPress={()=>incrementCount(this.state.votes[1], 1)}
            onPress={()=>this.props.navigation.navigate('ResultScreen')}>
            <Text style={styles.buttonText}>{this.state.restaurant[1]}</Text>
        </TouchableOpacity>
    


     
      <TouchableOpacity
            style={styles.container}
            onPress={()=>incrementCount(this.state.votes[2], 2)}
            onPress={()=>this.props.navigation.navigate('ResultScreen')}>
            <Text style={styles.buttonText}>{this.state.restaurant[2]}</Text>
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

function incrementCount(count, user) {
  
  var num = count+ 1;
  var rest = user + 1;
  firebase.database().ref('pin/1001/res'+rest).update({
    votes: num
    
  });
  console.log("works");
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

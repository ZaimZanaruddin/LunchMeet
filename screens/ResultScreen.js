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


export default class ResultScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      finished:true,
    };
  }

  _onRefresh = () => {
    console.log(this.state.finished)
    this.setState({refreshing: true});
    if(this.state.finished==false){
        console.log("NO");
        ()=>this.props.navigation.navigate('ResultScreen')
    }
    if(this.state.finished==true){
        console.log("Bye");
        this.props.navigation.navigate('SettingScreen')
    }
    this.setState({refreshing: false});
  }
 
  render() {
    return (
      

    <ScrollView>
        <RefreshControl
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}
        />
      };

      <View style ={styles.backgroundPage}>
      <Text style = {styles.titleText}>LunchMeet</Text>
      <View style = {styles.question}>
      <Text style = {styles.questionText}>The Results</Text>
      
      </View>
      
      <View style = {styles.homeContainer}>
    
        <View>
            <BarChart
                data={{
                labels: ['Choice1', 'Choice2', 'Choice3'],
                datasets: [{
                    data: [
                    3,
                    4,
                    1,
                    ]
                }]
                }}
                width={350} 
                height={220}
                chartConfig={{
                backgroundColor: '#DA3743',
                backgroundGradientFrom: '#DA3743',
                backgroundGradientTo: '#DA3743',
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = .2) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16,
                marginLeft:11
                }}
            />
            </View>


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
      </ScrollView>
      
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

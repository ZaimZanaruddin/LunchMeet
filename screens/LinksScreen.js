import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import TouchableHighlight from 'react-native-platform-touchable';

const selected_companies = {
  company_name: [],
  company_id: []
};

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    data: []
  };

  

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch('https://api.yelp.com/v3/businesses/search?location=Arlington', {
                                    method: 'GET',
                                    headers: { 'Authorization': 'Bearer vA2lOn3UepbvPt3y59mrzpLFqzqFBzNHWeZ3sZQXu8yIg1LNAHxmQjes10VUheVr8IeCBcvNyx6rSnYPKOmLVzU6vtO_9WAHwWPTsp-vNjFFfFH9Au6rN2Vm2Yq5W3Yx' }
                                  }
                                )
    const json = await response.json();
    console.log(json.businesses[0].name);
    this.setState({ data: json.businesses});
  }

  setSelectedCompanies(company_name, company_id) {
    if (selected_companies.company_name.length == 3) {
      selected_companies.company_name.pop();
      selected_companies.company_id.pop();
      selected_companies.company_name.unshift(company_name);
      selected_companies.company_id.unshift(company_id);
      console.log(selected_companies);
    }
    else {
      selected_companies.company_name.push(company_name);
      selected_companies.company_id.push(company_id);
      console.log(selected_companies);
    }
  };

  getSelectedCompanies() {
    this.forceUpdate();
    console.log(selected_companies.company_name);
    return(selected_companies);
  }
  
  checkIfPressed(id) {
    if((selected_companies.company_id).includes(id)) {
      style = StyleSheet.create({
        button: {
          backgroundColor: '#DA3743',
          marginTop: 5,
          paddingVertical: 30,
          paddingHorizontal: 80,
          alignItems: 'center'
        }
      });
      return (style.button)
    }
    else {
      style = StyleSheet.create({
        button: {
          backgroundColor: '#e5e5e5',
          marginTop: 5,
          paddingVertical: 30,
          paddingHorizontal: 80,
          alignItems: 'center'
        }
    });
    return (style.button)
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{
                      height: 700,
                      }}>
          <FlatList data={this.state.data}
          keyExtractor={(x, i) => i.toString()}
          renderItem={
            ({ item }) => 
              <TouchableHighlight
                onPress={() => this.setSelectedCompanies(item.name, item.id)}
                style={this.checkIfPressed(item.id)}
                >
                <Text>
                  {item.name}
                </Text>
              </TouchableHighlight>
            }
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonLook}
            onPress={()=>this.props.navigation.navigate('SettingsScreen')}>
            <Text style={styles.buttonText}>Start Poll</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f5f5f5',
  },

  buttonText:{
    fontSize:30,
    fontWeight:'bold',
    color:'white',
  },
  
  buttonContainer: {
    width: 500,
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    padding:1,
    backgroundColor: '#DA3743'
  },

  buttonLook: {
    alignItems: 'center',
    width:200,
    height:60,
    backgroundColor: '#404040',
    padding: 10,
  },
});
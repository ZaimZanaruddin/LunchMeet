import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Touchable from 'react-native-platform-touchable';

export default class LinksScreen extends React.Component {

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


  render() {
    return (
      <View style={styles.container}>
      
        <FlatList data={this.state.data}
        keyExtractor={(x, i) => i.toString()}
        renderItem={
          ({ item }) => 
            <Touchable
            onPress={() => console.log('hello')}
            style={{
              backgroundColor: '#e5e5e5',
              marginTop: 5,
              paddingVertical: 30,
              paddingHorizontal: 80,
              alignItems: 'center'
            }}
            >
              <Text>
                {item.name}
              </Text>
            </Touchable>
          }
        />
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
});
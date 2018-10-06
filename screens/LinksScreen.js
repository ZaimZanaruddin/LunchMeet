import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Browse',
  };

  state = {
    data: []
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch('https://randomuser.me/api?results=10');
    const json = await response.json();
    this.setState({ data: json.results });
  }


  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.data}
        keyExtractor={(x, i) => i.toString()}
        renderItem={
          ({ item }) => 
            <Text>
              {item.name.first} {item.name.last}
            </Text>
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

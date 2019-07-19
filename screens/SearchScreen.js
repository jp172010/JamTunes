import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import Search from '../components/SearchBar';
import { Icon } from 'react-native-elements';
import SearchIcon from '../components/SearchIcon';


export default function SearchScreen() {
  return (
    <View>
      <Search />
      <View style={styles.welcomeContainer}>
        <SearchIcon name="ios-search" size={150} color="black"/>
        <Text style={styles.setFontSizeOne}>Search JamTunes</Text>
        <Text style={styles.setFontSizeTwo}>Find artists, music, and audio</Text>
      </View>
    </View>
  );
}

SearchScreen.navigationOptions = {
  title: 'Search',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  welcomeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
    marginBottom: 20,
  },
  setFontSizeOne: {
    fontSize: 35,
    fontWeight: "300", // Define font size here in Pixels
  },
  setFontSizeTwo: {
    fontSize: 15,
    marginTop: 5,
  },
});

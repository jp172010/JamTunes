import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import Search from '../components/SearchBar';
import { Icon } from 'react-native-elements';
import SearchIcon from '../components/SearchIcon';

import SongList from '../components/ListItem';

import * as actions from '../actions/index';

export default class SearchScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      list: [
        {
          name: 'Eric Prydz',
          avatar_url: 'https://cdn.shopify.com/s/files/1/0385/6229/files/b8fe22d2_large.jpg?v=1482620682',
          subtitle: 'Purple Line',
          song_length: '2:45',
          test: 'test'

        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://edmidentity.com/wp-content/uploads/2017/12/Album-Cover-Art.jpg',
          subtitle: 'Promise You',
          song_length: '3:38',
          test: 'test'
        },
        {
          name: 'Eric Prydz',
          avatar_url: 'https://cdn.shopify.com/s/files/1/0385/6229/files/b8fe22d2_large.jpg?v=1482620682',
          subtitle: 'Purple Line',
          song_length: '2:45',
          test: 'test'

        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://edmidentity.com/wp-content/uploads/2017/12/Album-Cover-Art.jpg',
          subtitle: 'Promise You',
          song_length: '3:38',
          test: 'test'
        },
        {
          name: 'Eric Prydz',
          avatar_url: 'https://cdn.shopify.com/s/files/1/0385/6229/files/b8fe22d2_large.jpg?v=1482620682',
          subtitle: 'Purple Line',
          song_length: '2:45',
          test: 'test'

        },
        {
          name: 'Chris Jackson',
          avatar_url: 'https://edmidentity.com/wp-content/uploads/2017/12/Album-Cover-Art.jpg',
          subtitle: 'Promise You',
          song_length: '3:38',
          test: 'test'
        },
        {
          name: 'Eric Prydz',
          avatar_url: 'https://cdn.shopify.com/s/files/1/0385/6229/files/b8fe22d2_large.jpg?v=1482620682',
          subtitle: 'Purple Line',
          song_length: '2:45',
          test: 'test'

        }
      ]
    }

    actions.searchTracks('eminem').then(
      (songs) => {
        debugger;
        return songs;
      })
  };



  render() {
    const { list } = this.state;
    return (
      <View>
        <Search />
        <ScrollView>
          <View style={styles.container} >
            {/* <SearchIcon name="ios-search" size={150} />
            <Text style={styles.setFontSizeOne}>Search JamTunes</Text>
            <Text style={styles.setFontSizeTwo}>Find artists, music, and audio</Text> */}
            <SongList data={list}
              avatarKey={'avatar_url'}
              titleKey={'name'}
              subtitleKey={'subtitle'}
              lengthKey={'song_length'}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

SearchScreen.navigationOptions = {
  title: 'Search',
  headerStyle: {
    borderBottomWidth: 0,
    backgroundColor: '#008dff',
  },
  headerTitleStyle: {
    color: 'white',
    fontSize: 20,
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
    marginBottom: 20,
  },
  setFontSizeOne: {
    fontSize: 40,
    fontWeight: "200", // Define font size here in Pixels
  },
  setFontSizeTwo: {
    fontSize: 18,
    marginTop: 5,
    color: 'grey',
  },
});

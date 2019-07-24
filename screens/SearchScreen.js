import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import Search from '../components/SearchBar';
import { Icon } from 'react-native-elements';
import SearchIcon from '../components/SearchIcon';

import * as actions from '../actions/index';
import SongList from '../components/ListItem';

export default class SearchScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songInfo: [],
      resultsShown: false,
      loader: false
    };

    this.searchSongs = this.searchSongs.bind(this);
  }

  // componentDidMount() {
  //   actions.searchTracks('Red Hot Chili Peppers').then((songInfo) => { this.setState({ songInfo }) })
  // };

  searchSongs(artist) {
    resultsShown=true;
    actions.searchTracks(artist).then((songInfo) => { this.setState({ songInfo, resultsShown }) })
  }

  render() {
    const { songInfo, resultsShown } = this.state;
    return (
      <View>
        <Search handleSubmit={this.searchSongs} />
        <ScrollView>
          <View style={styles.container} >
            {!resultsShown ?
              <View style={styles.welcomeContainer}>
                <SearchIcon name="ios-search" size={150} />
                <Text style={styles.setFontSizeOne}>Search JamTunes</Text>
                <Text style={styles.setFontSizeTwo}>Find artists, music, and audio</Text>
              </View> :
              <SongList data={songInfo}
                avatarKey={'cover_medium'}
                titleKey={'artist_name'}
                subtitleKey={'title'}
                lengthKey={'duration'}
              />}
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

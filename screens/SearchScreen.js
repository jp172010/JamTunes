import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import Search from '../components/SearchBar';
import SearchIcon from '../components/SearchIcon';
import Loader from '../components/ActivityIndicator';
import SongList from '../components/ListItem';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as actions from '../actions/index';

export default class SearchScreen extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      songInfo: [],
      resultsShown: false,
      isLoading: false
    };

    this.searchSongs = this.searchSongs.bind(this);
  }

  clearResults = () => this.setState({ resultsShown: false });

  searchSongs(artist) {
    this.setState({ isLoading: true, resultsShown: false });
    actions.searchTracks(artist).then((songInfo) => { this.setState({ songInfo, resultsShown: true, isLoading: false }) })
  }
  

  render() {
    const { songInfo, resultsShown, isLoading } = this.state;
    return (
      <View>
        <Search handleSubmit={this.searchSongs} clearResults={this.clearResults} />
          <View style={styles.container} >
            {!resultsShown ? isLoading ? <Loader loading={isLoading} /> :

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
    fontSize: 35,
    fontWeight: '300'
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('17%'),
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

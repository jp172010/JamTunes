import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// import SongList from '../components/ListItem';
// import Search from '../components/SearchBar';
// import PlaylistTile from '../components/PlaylistTile';
import SuperGrid from '../components/SuperGrid';


export default function HomeScreen(props) {
  return (
    <ScrollView >
      <View style={styles.container}>
       <SuperGrid navigate={props.navigation.navigate}/>
        {/* <PlaylistTile onPress={() => { props.navigation.navigate('Playlist') }}/>
        <PlaylistTile onPress={() => console.log("Works!")}/>
        <PlaylistTile onPress={() => console.log("Works!")}/> */}
      </View>
    </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  title: 'JamTunes',
  headerStyle: {
    borderBottomWidth: 0,
    backgroundColor: '#008dff',
  },
  headerTitleStyle: {
    color: 'white',
    fontSize: 35,
    fontWeight: "300",
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});

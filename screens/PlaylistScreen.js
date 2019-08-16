import React from 'react';
import { ScrollView, StyleSheet, View, Text, FlatList } from 'react-native';
import Tile from '../components/PlaylistTile';
import SongList from '../components/ListItem';

export default class PlaylistScreen extends React.Component {


    render() {

        const songs = this.props.navigation.getParam('responsejson');
        const songInfo = songs.data.map(({ id, title, preview, artist: { name: artist_name }, album: { cover_medium: cover_medium }, duration }) => ({ id, title, preview, artist_name, duration, cover_medium }));

        const picture = this.props.navigation.getParam('item');

        console.log("Inside Playlist")
        // console.log(songs)


        return (
            <View style={styles.container}>
                <Tile data={picture}/>
                <SongList data={songInfo}
                    avatarKey={'cover_medium'}
                    titleKey={'artist_name'}
                    subtitleKey={'title'}
                    lengthKey={'duration'}
                />
            </View>
        );
    }
}

PlaylistScreen.navigationOptions = {
    title: "Playlist",
    headerStyle: {
        borderBottomWidth: 0,
        backgroundColor: '#008dff',
    },
    headerTitleStyle: {
        color: 'white',
        fontSize: 20,
    },
};
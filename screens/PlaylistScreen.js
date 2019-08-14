import React from 'react';
import { ScrollView, StyleSheet, View, Text, FlatList } from 'react-native';
import Search from '../components/SearchBar';
import Tile from '../components/PlaylistTile';

export default class PlaylistScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Tile />
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
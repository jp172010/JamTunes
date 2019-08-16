import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { Tile } from 'react-native-elements';
import * as Icon from '@expo/vector-icons';
import PlayIcon from '../components/PlayIcon';



export default class PlaylistTile extends React.Component {

    render() {

        const albumCover = this.props.data;
        console.log(albumCover);

        return (

            <Tile
                imageSrc={{ uri: albumCover.picture_xl }}
                contentContainerStyle={{ height: 100 }}
                featured={true}
                icon={{name: 'play', type: 'evilicon', size: 125, color: 'white'}}
                containerStyle={{ shadowColor: '#000000' }}
            >
            </Tile>

        )
    }
}
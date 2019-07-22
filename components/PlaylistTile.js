import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { Tile } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';


export default class PlaylistTile extends React.Component {

    render() {
        return (
            <Tile
                imageSrc={{ uri: 'https://cdn.shopify.com/s/files/1/0385/6229/files/b8fe22d2_large.jpg?v=1482620682' }}
                title="Chill Electronics"
                caption="Circuits"
                contentContainerStyle={{ height: 100 }}
                featured={true}
                containerStyle={{marginTop: 1}}
            >
                <View
                    style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
                >
                </View>
            </Tile>
        )
    }
}
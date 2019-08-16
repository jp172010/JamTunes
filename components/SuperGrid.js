
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

export default class SuperGrid extends Component {

    state = { titles: [] };

    componentDidMount() {
        fetch(
            "https://api.deezer.com/chart/0/playlists"
        )
            .then(response => response.json())
            .then(responsejson => {
                console.log(responsejson);
                this.setState({ titles: responsejson.data })
            }).catch();
    }

    render() {
        const { titles } = this.state

        return (
            <FlatGrid
                items={titles}
                style={styles.gridView}
                spacing={20}
                // horizontal={true}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={styles.buttoncontainer} onPress={() => {
                        fetch(
                            item.tracklist
                        )
                            .then(response => response.json())
                            .then(responsejson => {
                                //console.log(responsejson);
                                this.props.navigate('Playlist', {responsejson, item})
                            }).catch();
                        }}>
                        <View >
                            <View style={styles.playlistContainer}>
                                <Image
                                    style={{ width: 180, height: 180, borderRadius: 5 }}
                                    source={{ uri: item.picture_big }} />
                            </View>
                            {/* <View style={styles.songInfoContainer}>
                                <Text style={styles.songName} numberOfLines={1} >{item.title}</Text>
                                <Text style={styles.artistName} numberOfLines={1} >by {item.user.name}</Text>
                            </View> */}
                        </View>
                    </TouchableOpacity>
                )}
            />
        );
    }
}
const styles = StyleSheet.create({
    gridView: {
        flex: 1,
        marginTop: 3
    },
    itemContainer: {
        justifyContent: 'center',
        borderRadius: 5,
        height: 200,
    },
    playlistContainer: {
        alignContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 1.0
    },
    songName: {
        fontSize: 18,
        color: 'black',
        paddingTop: 14
    },
    artistName: {
        fontSize: 12,
        color: 'grey',
        maxWidth: 150,
        paddingTop: 3
    }
});
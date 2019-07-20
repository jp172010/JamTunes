import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { ListItem, FlatList } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';




const list = [
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

export default class SongList extends React.Component {

    render() {
        return (
            <View>
                {
                    list.map((item, index) => (
                        <ListItem onPress={() => console.log("Works!")}
                            key={index}
                            leftAvatar={{
                                source: { uri: item.avatar_url },
                                size: 'large',
                                rounded: false,
                            }}
                            title={
                                <Text style={styles.artistName}>{item.name}</Text>
                            }
                            subtitle={
                                <View>
                                    <Text style={styles.songName}>{item.subtitle}</Text>
                                    <Text style={styles.songLength}>{item.song_length}</Text>
                                </View>
                            }
                            rightTitle={
                                <Ionicons style={styles.heartIcon} 
                                name='ios-heart-empty' 
                                size={24}
                                onPress={() => console.log("Works!")}
                                />
                            }
                            bottomDivider={true}
                        />
                    ))
                }
            </View>
        )
    }
}



styles = StyleSheet.create({
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingTop: 5
    },
    artistName: {
        fontSize: 14,
        marginBottom: 3,
        color: 'grey'
    },
    songName: {
        fontSize: 22,
        marginBottom: 4,
        fontWeight: '300'
    },
    songLength: {
        color: 'grey'
    },
    heartIcon: {
        marginRight: 10,
        color: 'grey'
    }
})
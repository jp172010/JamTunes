import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { ListItem, FlatList } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';


export default class SongList extends React.Component {

    renderData() {
        const { data, avatarKey, titleKey, subtitleKey, lengthKey } = this.props;
        // debugger;
        return (
            <View>
                {
                    data.map((item, index) => (
                        <ListItem onPress={() => console.log("Works!")}
                            key={index}
                            leftAvatar={{
                                source: { uri: item[avatarKey] },
                                size: 'large',
                                rounded: false,
                            }}
                            title={
                                <Text style={styles.artistName}>{item[titleKey]}</Text>
                            }
                            subtitle={
                                <View>
                                    <Text style={styles.songName}>{item[subtitleKey]}</Text>
                                    <Text style={styles.songLength}>{item[lengthKey]}</Text>
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
    render() {
        return this.renderData();
    }
}



styles = StyleSheet.create({
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
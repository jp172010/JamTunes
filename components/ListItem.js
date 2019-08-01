import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

const source = {
    uri: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3',
};


class Music extends Component {

    state = {
        favorite: false
    }

    toggleFav = () => {
        this.setState({ favorite: !this.state.favorite });
        console.log("It works!")
    }


    async componentDidMount() {
        Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            playThroughEarpieceAndroid: false,
            staysActiveInBackground: true,
        });
    };


    async test() {
        const initialStatus = {
            shouldPlay: true,
        };

        const { sound: soundObject, status } = await Audio.Sound.createAsync(source, initialStatus, onPlaybackStatusUpdate = null, downloadFirst = true)
    }



    // _onPlayPausePressed = () => {
    //     console.log(this.playbackInstance);
    //     if (this.playbackInstance != null) {
    //         console.log('inside if')
    //         if (this.state.isPlaying) {
    //             this.playbackInstance.pauseAsync();
    //         } else {
    //             console.log(this.playbackInstance)
    //             this.playbackInstance.playAsync();
    //         }
    //     }
    // };


    render() {
        const { item, avatarKey, titleKey, subtitleKey, lengthKey, preview } = this.props;

        return <ListItem onPress={() => this.test(item[preview])}
            leftAvatar={{
                source: { uri: item[avatarKey] },
                size: 'large',
                rounded: false,
            }}
            title={
                <Text numberOfLines={1} style={styles.artistName}>{item[titleKey]}</Text>
            }
            subtitle={
                <View>
                    <Text numberOfLines={1} style={styles.songName}>{item[subtitleKey]}</Text>
                    <Text style={styles.songLength}>{item[lengthKey]}</Text>
                </View>
            }
            rightTitle={
                <Ionicons
                    color={this.state.favorite ? '#008dff' : 'grey'}
                    name={this.state.favorite ? 'ios-heart' : 'ios-heart-empty'}
                    size={24}
                    onPress={() => this.toggleFav()}
                />
            }
            bottomDivider={true}
        />
    }
}


export default class SongList extends Component {

    renderData() {
        const { data, avatarKey, titleKey, subtitleKey, lengthKey } = this.props;

        return (
            <View>
                {
                    data.map((item, index) => (
                        <Music
                            item={item}
                            key={index}
                            avatarKey={avatarKey}
                            titleKey={titleKey}
                            subtitleKey={subtitleKey}
                            lengthKey={lengthKey} />
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
        fontWeight: '300',
        flexDirection: 'row',
        flex: 1
    },
    songLength: {
        color: 'grey'
    }
})
import React, { Component } from 'react';
import { Audio } from 'expo-av';
import { connect } from 'react-redux';

class Player extends Component {

    sound = null;

    constructor(props){
        super(props);
        console.log(' I exists ');
        Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
            shouldDuckAndroid: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
            playThroughEarpieceAndroid: false,
            staysActiveInBackground: true,
        });   
    }

    async componentDidUpdate(prevProps) {
        console.log(prevProps);
        console.log(' I am updating');
        if (this.props.status.file !== prevProps.status.file) {
            if (this.sound){
                this.sound.unloadAsync()
            }
            const { sound, status } = await Audio.Sound.createAsync({ uri: this.props.status.file }, { shouldPlay: true }, onPlaybackStatusUpdate = null, downloadFirst = true)
            this.sound = sound;
        } else if (this.props.status.playing !== prevProps.status.playing) {
            this.props.status.playing ? this.sound.playAsync() : this.sound.pauseAsync();
        }
    }

    render() {
        return null;
    }
}


export default connect(({ player: status }) => ({ status }))(Player)
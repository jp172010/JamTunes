import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Music from './Music';

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
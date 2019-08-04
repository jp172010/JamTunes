import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { player } from '../reducers/player';
// import Signup from '../components/Signup';

class Music extends Component {

    // setModalVisible(visible) {
    //     this.setState({ modalVisible: visible });
    // }

    state = {
        favorite: false
        // modalVisible: false
    }

    toggleFav = () => {
        // if (true) {
        //     return this.setModalVisible(true);
        // }
        // this.setModalVisible(true);
        this.setState({ favorite: !this.state.favorite });
        console.log("It works!")
    }


    render() {
        const { item, avatarKey, titleKey, subtitleKey, lengthKey } = this.props;
        return (
            // <Fragment>
            <ListItem onPress={() => this.props.play(item.preview)}
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
            //     {this.state.modalVisible && <Signup showModal={this.state.modalVisible}/> }
            // </Fragment>
        )
    }
}


export default connect(() => ({}), player.actions)(Music)
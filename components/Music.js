import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { player } from '../reducers/player';
// import Signup from '../components/Signup';
import * as firebase from 'firebase'
import { getFb } from '../reducers/firebase';

class Music extends Component {

    constructor(props) {
        super(props)
        this.state = {
            favorite: false
        }
    }


    toggleFav = () => {
        this.setState({ favorite: !this.state.favorite });
        console.log("It works!")
    }


    storeSongInfo = (uid) => {
        getFb().database().ref('likes/' + uid).push(this.props.item);
        console.log(this.props.item)
        this.props.item = '';
    }



    authCheck = () => {
        firebase.auth(getFb()).onAuthStateChanged(user => {
            if (user) {
                this.storeSongInfo(user.uid);
                this.toggleFav();
            } else {
                this.props.navigation.navigate('Auth');
            }
        })
    }


    // firebase.auth().onAuthStateChanged(user => {
    //     this.props.navigation.navigate(user ? 'Main' : 'Auth')
    // })


    render() {
        const { item, avatarKey, titleKey, subtitleKey, lengthKey } = this.props;

        return (
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
                        onPress={() => this.authCheck()}
                    />
                }
                bottomDivider={true}
            />
        )
    }
}


export default connect(() => ({}), player.actions)(Music)
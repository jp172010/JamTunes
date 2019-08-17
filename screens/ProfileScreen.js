import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ProfileInfo from '../components/Badge';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase/app';
import { Text } from 'react-native';
import { getFb, destroyFb, firebase as fb } from '../reducers/firebase';
import { connect } from 'react-redux';
import SongList from '../components/ListItem';

class ProfileScreen extends Component {

    constructor(props) {
        super(props)

        this.state = {
            savedSongs: []
        };

        this.authCheck();

    }


    retrieveSongInfo = (uid) => {
        getFb().database().ref('likes/' + uid).on('value', response => {
            this.setState({ savedSongs: Object.values(response.toJSON()) })
        })
    }

    authCheck = () => {
        firebase.auth(getFb()).onAuthStateChanged(user => {
            if (user) {
                this.retrieveSongInfo(user.uid);
            }
        })
    }

    signOutUser = async () => {
        try {
            await firebase.auth(getFb()).signOut();
            destroyFb(fb => {
                props.logOut(fb);
            })
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const { savedSongs } = this.state;

        console.log("I made it to render")
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ProfileInfo />

                    <SongList data={savedSongs}
                        avatarKey={'cover_medium'}
                        titleKey={'artist_name'}
                        subtitleKey={'title'}
                        lengthKey={'duration'}
                    />
                </ScrollView>

                {/* <View style={styleswelcomeContainer}>
                    <Text style={styles.welcomeText}>Your favorite songs will {"\n"} be stored here</Text>
                </View> */}
            </View>
        );
    }
}

ProfileScreen.navigationOptions = {
    title: "Profile",
    headerStyle: {
        borderBottomWidth: 0,
        backgroundColor: '#008dff',
    },
    headerTitleStyle: {
        color: 'white',
        fontSize: 20,
    },
    headerRight: (
        <Ionicons
            onPress={() => this.signOutUser()}
            name='ios-log-out'
            size={24}
            color="#fff"
            style={{
                marginRight: 16,
            }}
        />
    ),
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    welcomeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 58,
    },
    welcomeText: {
        fontSize: 18,
        color: 'grey',
        textAlign: 'center'
    }
});


export default connect(() => ({}), fb.actions)(ProfileScreen)

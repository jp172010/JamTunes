import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import ProfileInfo from '../components/Badge';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase/app';
import { ScrollView, Text } from 'react-native';


export default function ProfileScreen(props) {

    signOutUser = async () => {
        try {
            await firebase.auth().signOut();
            navigate('Auth');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <View style={styles.container}>
            <ProfileInfo />
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Your favorite songs will {"\n"} be stored here</Text>
            </View>
        </View>
    );
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

import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar, Badge, Icon, withBadge, ListItem } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class ProfileInfo extends Component {

    render() {
        return <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar
                    rounded
                    source={{
                        uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                    }}
                    size="xlarge"
                    onPress={() => console.log('Prompt Change Picture!')}
                    showEditButton={true}
                />
                <View style={styles.usernameContainer}>
                    <Text style={styles.username}>@Jameson_C</Text>
                </View>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: hp('7%'),
    },
    usernameContainer: {
        marginTop: hp('2%'),
    },
    username: {
        fontSize: hp('3%'),
        fontWeight: "200", // Define font size here in Pixels
    }
});


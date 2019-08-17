import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class ProfileInfo extends Component {

    render() {
        return <View style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar
                    rounded
                    source={{
                        uri: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/24862301_10155863018634882_2864073962542103935_n.jpg?_nc_cat=106&_nc_oc=AQmMoTr49TcN3n9X-g2OwVXS5ixucBZa9ENVzR5JbJ9ClBXoOLhCs3hzEiBp04K8qoRecbwYZjbZu1_O-By0jZ3Y&_nc_ht=scontent-dfw5-1.xx&oh=5a2bd5c6f2b5ac6df47126404b5c4e0d&oe=5DDCCB02',
                    }}
                    size="xlarge"
                    onPress={() => console.log('Prompt Change Picture!')}
                    showEditButton={false}
                />
                <View style={styles.usernameContainer}>
                    <Text style={styles.username}>@Ziggy</Text>
                </View>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginBottom: 25,
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


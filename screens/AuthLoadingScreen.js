import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import { getFb } from '../reducers/firebase';

class AuthLoadingScreen extends React.Component {

    constructor(props) {
        super(props)
        firebase.auth(getFb()).onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Main' : 'Auth')
        });

    }

    componentDidUpdate(prevProps) {
        if (this.props.firebase !== prevProps.firebase) {
            firebase.auth(getFb()).onAuthStateChanged(user => {
                this.props.navigation.navigate(user ? 'Main' : 'Auth')
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default connect(({ firebase }) => ({ firebase }))(AuthLoadingScreen)
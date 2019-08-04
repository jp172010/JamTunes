import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class Signup extends Component {

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    state = {
        modalVisible: false,
        Username: '', Password: '', Email: ''
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    signUp = async () => {
        const { username, password, email, phone_number } = this.state
        try {
            // here place your signup logic
            console.log('user successfully signed up!: ', success)
        } catch (err) {
            console.log('error signing up: ', err)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    style={styles.modal}
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={styles.formWrapper}>
                        <View>
                            <Text style={styles.branding}>Welcome to JamTunes!</Text>
                        </View>
                        <View style={styles.form}>
                            <Input
                                style={styles.inputs}
                                label='Username'
                                autoCapitalize="none"
                                labelStyle={{
                                    marginTop: 20
                                }}
                                onChangeText={val => this.onChangeText('Username', val)}
                            />
                            <Input
                                style={styles.inputs}
                                label='Email'
                                autoCapitalize="none"
                                labelStyle={{
                                    marginTop: 20
                                }}
                                onChangeText={val => this.onChangeText('Email', val)}
                            />
                            <Input
                                style={styles.inputs}
                                label='Password'
                                secureTextEntry={true}
                                autoCapitalize="none"
                                labelStyle={{
                                    marginTop: 20
                                }}
                                containerStyle={{
                                    marginBottom: 20
                                }}
                                onChangeText={val => this.onChangeText('Password', val)}
                            />
                            <Button
                                title='Submit'
                                raised={true}
                                onPress={this.signUp}
                            />
                        </View>
                        <View style={styles.textTwo}>
                            <Text>Already have an account? Login</Text>
                        </View>

                        <TouchableHighlight
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    branding: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        fontSize: 36,
        fontWeight: '200'
    },
    textTwo: {
        marginTop: 15
    },
    inputs: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formWrapper: {
        height: '100%',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 35
    },
    form: {
        margin: 'auto',
    }
})

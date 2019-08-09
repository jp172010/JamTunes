
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase/app';
import { Input, Button } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class SignUpScreen extends React.Component {
    state = { email: '', password: '', errorMessage: null }

    handleSignUp = () => {
        const { email, password } = this.state
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => this.props.navigation.navigate('Main'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.branding}>Welcome to JamTunes</Text>
                {this.state.errorMessage &&
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}
                <Input
                    style={styles.textInput}
                    label='Email'
                    autoCapitalize="none"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                    labelStyle={{
                        marginTop: hp('2%')
                    }}
                    containerStyle={{
                        paddingLeft: hp('6%'),
                        paddingRight: hp('6%')
                    }}
                />
                <Input
                    style={styles.textInput}
                    secureTextEntry={true}
                    label="Password"
                    autoCapitalize="none"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    labelStyle={{
                        marginTop: hp('2%')
                    }}
                    containerStyle={{
                        marginBottom: hp('2%'),
                        paddingLeft: hp('6%'),
                        paddingRight: hp('6%')
                    }}
                />
                <Button
                    title="Sign Up"
                    raised={true}
                    buttonStyle={{
                        width: hp('34%')
                    }}
                    onPress={this.handleSignUp} />
                <Button
                    title="Already have an account? Login"
                    type='clear'
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    },
    branding: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        fontSize: hp('4%'),
        fontWeight: '200'
    }
})
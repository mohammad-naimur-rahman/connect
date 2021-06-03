import React, { useLayoutEffect, useState } from 'react'
import { Button } from 'react-native'
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import { Input } from 'react-native-elements/dist/input/Input'
import { auth } from '../firebase'

const RegisterScreen = ({ navigation }) => {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [imgURL, setimgURL] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Back to Login'
        })
    }, [navigation])

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then(authUser => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL: imgURL
                });
            }).catch(error => alert(error.message));
    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Text style={styles.heading}>
                Create a new account in Connect
            </Text>
            <View style={styles.inputContainer}>
                <Input
                    placeholder='Full Name'
                    autoFocus
                    type='text'
                    value={name}
                    onChangeText={text => setname(text)}
                />
                <Input
                    placeholder='Your Email'
                    type='email'
                    value={email}
                    onChangeText={text => setemail(text)}
                />
                <Input
                    placeholder='Password'
                    type='password'
                    value={password}
                    onChangeText={text => setpassword(text)}
                    secureTextEntry
                />
                <Input
                    placeholder='Profile picture URL (optional)'
                    type='text'
                    value={imgURL}
                    onChangeText={text => setimgURL(text)}
                    onSubmitEditing={register}
                />
                <Button
                    style={styles.button}
                    raised
                    onPress={register} title='Sign up to new account'
                />
            </View>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        fontWeight: '700'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        width: '80%'
    },
    button: {
        width: 200,
        marginTop: 10
    }
})

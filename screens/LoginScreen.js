import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { Input } from 'react-native-elements/dist/input/Input';
import { Button } from 'react-native-elements';
import { KeyboardAvoidingView } from 'react-native';
import { auth } from '../firebase';

const LoginScreen = ({ navigation }) => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace('Home');
            }
        })

        return unsubscribe;
    }, []);

    const signIn = () => {

    }

    return (
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light' />
            <Image source={{
                uri: 'https://i.ibb.co/1r0bmfV/connect-logo.png'
            }}
                style={styles.logo}
            />
            <View style={styles.inputContainer}>
                <Input
                    placeholder='Email'
                    autoFocus
                    type='email'
                    value={email}
                    onChangeText={text => setemail(text)}
                />
                <Input
                    secureTextEntry placeholder='Password' type='password'
                    value={password}
                    onChangeText={text => setpassword(text)}
                />
            </View>
            <Button
                containerStyle={styles.button}
                title='Login'
                onPress={signIn}
            />
            <Button
                containerStyle={styles.button}
                type='outline'
                title='Sign up'
                onPress={() => navigation.navigate('Register')}
            />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    inputContainer: {
        width: '80%'
    },
    button: {
        width: 200,
        marginTop: 10
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 50
    }
})

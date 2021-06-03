
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const AddChatScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Add  Chat Screen</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default AddChatScreen;

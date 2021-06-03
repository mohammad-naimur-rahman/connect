import React, { Component } from 'react';
import { Avatar } from 'react-native-elements';
import { ListItem } from 'react-native-elements';

const componentName = ({ id, chatName, enterChat }) => (
    <ListItem>
        <Avatar
            rounded
            source={{
                uri: 'https://pixabay.com/vectors/avatar-icon-placeholder-1577909/'
            }}
        />

        <ListItem.Content>
            <ListItem.Title style={{ fontWeight: "800" }}>
                Friends Chat
            </ListItem.Title>
            <ListItem.Subtitle numberOfList={1} ellipsizeMode='tail'>
                This is a Subtitle
            </ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
);

export default componentName;


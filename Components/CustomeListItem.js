import React, { Component } from 'react';
import { Avatar } from 'react-native-elements';
import { ListItem } from 'react-native-elements';

const CustomeListItem = ({ id, chatName, enterChat }) => (
    <ListItem key={id} bottomDivider>
        <Avatar
            rounded
            source={{
                uri: 'https://pixabay.com/vectors/avatar-icon-placeholder-1577909/'
            }}
        />

        <ListItem.Content>
            <ListItem.Title style={{ fontWeight: "800" }}>
                {chatName}
            </ListItem.Title>
            <ListItem.Subtitle numberOfList={1} ellipsizeMode='tail'>
                ABC
            </ListItem.Subtitle>
        </ListItem.Content>
    </ListItem>
);

export default CustomeListItem;


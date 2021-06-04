import React from "react";
import {ListItem, Avatar} from "react-native-elements";
import {StyleSheet, Text, View} from "react-native";

const CustomeListItem = ({id, chatName, enterChat}) => {
  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
      <Avatar
        rounded
        source={{
          uri: "https://pixabay.com/vectors/avatar-icon-placeholder-1577909/",
        }}
      />

      <ListItem.Content>
        <ListItem.Title style={{fontWeight: "800"}}>{chatName}</ListItem.Title>
        <ListItem.Subtitle numberOfList={1} ellipsizeMode="tail">
          all is ok
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomeListItem;

const styles = StyleSheet.create({});

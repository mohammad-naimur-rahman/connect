import React, {useEffect, useState} from "react";
import {ListItem, Avatar} from "react-native-elements";
import {StyleSheet, Text, View} from "react-native";
import {db} from "../firebase";

const CustomeListItem = ({id, chatName, enterChat}) => {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("chats")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setChatMessages(snapshot.docs.map((doc) => doc.data()))
      );

    return unsubscribe;
  }, []);

  return (
    <ListItem
      key={id}
      onPress={() => enterChat(id, chatName)}
      key={id}
      bottomDivider
    >
      <Avatar
        rounded
        source={{
          uri:
            chatMessages?.[0]?.photoURL ||
            "https://media.istockphoto.com/vectors/male-user-icon-vector-id517998264?k=6&m=517998264&s=612x612&w=0&h=cVT9i04gMY9KhLaTavgG-zY54PnYdXNjblZ9AQOHRqc=",
        }}
      />

      <ListItem.Content>
        <ListItem.Title style={{fontWeight: "800"}}>{chatName}</ListItem.Title>
        <ListItem.Subtitle numberOfList={1} ellipsizeMode="tail">
          {chatMessages?.[0]?.displayName}: {chatMessages?.[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomeListItem;

const styles = StyleSheet.create({});

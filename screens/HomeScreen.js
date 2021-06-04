import React, {useEffect, useLayoutEffect, useState} from "react";
import {ScrollView} from "react-native";
import {SafeAreaView, TouchableOpacity} from "react-native";
import {View, Text} from "react-native";
import {Avatar} from "react-native-elements";
import {AntDesign, SimpleLineIcons} from "@expo/vector-icons";
import CustomeListItem from "../Components/CustomeListItem";
import {auth, db} from "../firebase";

const HomeScreen = ({navigation}) => {
  const [chats, setChats] = useState([]);

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  useEffect(() => {
    const unsubscribe = db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return unsubscribe;
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerStyle: {backgroundColor: "#fff"},
      headerTitleStyle: {color: "balck"},
      headerTintColor: "balck",
      headerLeft: () => (
        <View>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            {/* <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} /> */}
            <Avatar
              rounded
              source={{
                uri: "https://pixabay.com/vectors/avatar-icon-placeholder-1577909/",
              }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("AddChat")}
            activeOpacity={0.5}
          >
            <SimpleLineIcons name="pencil" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        {chats.map(({id, data: {chatName}}) => (
          <CustomeListItem key={id} id={id} chatName={chatName} />
        ))}
        {/* <CustomeListItem></CustomeListItem> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

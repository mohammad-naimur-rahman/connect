import React, { useLayoutEffect } from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import { View, Text } from 'react-native'
import { Avatar } from 'react-native-elements'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'
import CustomeListItem from '../Components/CustomeListItem'
import { auth, db } from "../firebase"


const HomeScreen = ({ navigation }) => {
    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace("Login")
        })
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Chat",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "balck" },
            headerTintColor: 'balck',
            headerLeft: () => (
                <View >
                    <TouchableOpacity onPress={signOutUser} activeOpacity={8.5} >
                        {/* <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} /> */}
                        <Avatar rounded source={{
                            uri: 'https://pixabay.com/vectors/avatar-icon-placeholder-1577909/'
                        }} />

                    </TouchableOpacity>

                </View>
            ),
            headerRight: () => (
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: 80,
                    marginRight: 20,
                }}>
                    <TouchableOpacity activeOpacity={8.5}>
                        <AntDesign name="camerao" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Add Chat")} activeOpacity={8.5}>
                        <SimpleLineIcons name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, []);
    return (
        <SafeAreaView>
            <ScrollView>
                <CustomeListItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

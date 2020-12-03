import React from 'react'
import { View } from 'react-native'
import { Header, Right, Left, Button, Icon, Title } from "native-base";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign';

const IHeader = ({ title, onAddIconPress }) => {

    const navigation = useNavigation()
    const route = useRoute()
    // console.log(navigation)
    // console.log(route)

    return (
        <>
            <Header androidStatusBarColor="#1A1A27" style={{ backgroundColor: "#1A1A27" }}>

                <Left style={{ flex: 1 }}>
                    <Button transparent onPress={e => navigation.goBack()}>
                        <AntDesign name="left" size={20} color="white" />
                    </Button>
                </Left>

                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Title style={{color:"white"}}>{title || route.name}</Title>
                </View>

                <Right style={{ flex: 1 }}>
                    {onAddIconPress && (
                        <Button transparent onPress={e => onAddIconPress()}>
                            <AntDesign name="plus" size={20} color="white" />
                        </Button>
                    )}
                </Right>
            </Header>
        </>
    );
}

export default IHeader
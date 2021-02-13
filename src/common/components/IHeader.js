import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Header, Right, Left, Button, Icon, Title } from "native-base";
import { useNavigation, useRoute } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import backBtn from '../../assets/images/backBtn.png';

const IHeader = ({ title, onAddIconPress, hideBackBtn }) => {

    const navigation = useNavigation()
    const route = useRoute()
    // console.log(navigation)
    // console.log(route)

    return (
        <>
            <Header androidStatusBarColor="#1A1A27" style={{ backgroundColor: "#FAFAFA" || "#1A1A27" }}>

                <Left style={{ flex: 1, opacity: hideBackBtn ? 0 : 1 }}>
                    {/* <Button transparent onPress={() => { if (!hideBackBtn) { navigation.goBack() } }}>
                        // <AntDesign name="left" size={20} color="white" />
                        <Image source={backBtn}/>
                        </Button> */}
                    <TouchableOpacity onPress={() => { if (!hideBackBtn) { navigation.goBack() } }}>
                        <Image style={{ width: 50, height: 50 }} source={backBtn} />
                    </TouchableOpacity>

                </Left>

                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Title style={{ fontWeight: "bold", color: "#1A1A27" }}>{title || route.name}</Title>
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
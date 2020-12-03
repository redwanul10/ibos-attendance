import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Content, Right, List, ListItem, Left, Body, Thumbnail, Text } from 'native-base';
import profilePhoto from '../../assets/images/profilePhoto.png';
import fontsFamily from '../theme/fonts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileInfo = ({ showMenuIcon }) => {
    return (
        // <Content >
        <List style={style.border}>
            <ListItem avatar noBorder style={style.profileWrapper}>
                <Left style={style.thumWrapper}>
                    <Thumbnail style={style.thumbnail} source={profilePhoto} />
                </Left>
                <Body>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={style.welcomeTxt}>Hello</Text>
                        <Text style={style.name}>Mr.Rashid</Text>
                    </View>
                    <Text note style={style.designation}>Software Engineer</Text>
                </Body>

                {showMenuIcon && (
                    <Right style={style.thumWrapper}>
                        <MaterialCommunityIcons name="sort-variant" size={35} color="black" />
                    </Right>
                )}
            </ListItem>
        </List>
        // </Content>
    );
}

export default ProfileInfo;

const style = StyleSheet.create({
    border: {
        borderBottomWidth: 2,
        borderBottomColor: "#F2F7FC",
    },
    profileWrapper: {
        paddingVertical: 5,
        marginLeft: -5
    },
    thumWrapper: {
        alignSelf: "center",
        justifyContent: "center"
    },
    thumbnail: {
        marginBottom: 10,
    },
    name: {
        fontSize: 22,
        marginLeft: -5,
        fontFamily: fontsFamily.RUBIK_REGULAR
    },
    welcomeTxt: {
        fontSize: 22,
        fontFamily: fontsFamily.RUBIK_BOLD
    },
    designation: {
        fontSize: 14,
        marginTop: 2,
        fontFamily: fontsFamily.RUBIK_REGULAR
    }
})
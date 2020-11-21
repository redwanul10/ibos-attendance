import React from 'react';
import { TouchableWithoutFeedback, View, Text, Image, StyleSheet } from 'react-native'
import fontsFamily from '../../../../common/theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../../../common/theme/colors';

const TutorialCard = ({ data }) => {
    return (
        <TouchableWithoutFeedback>
            <View style={style.card}>

                <Image style={style.thumbnail} source={data.image} />
                <View style={style.content}>
                    <Text style={style.text}>{data.title}</Text>
                    <View style={style.duratinWrapper}>
                        <AntDesign name="clockcircleo" size={11} color={colors.GREY} />
                        <Text style={[style.text, style.duration]}>{data.duration}</Text>
                    </View>
                </View>
            </View>

        </TouchableWithoutFeedback>
    );
}

export default TutorialCard;

const style = StyleSheet.create({
    card: {
        width: 190,
        // height: 147,
    },
    thumbnail: {
        width: "100%",
        height: 100
    },
    content: {
        padding: 5,
        paddingLeft: 10,
        backgroundColor: "white",
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
    },
    text: {
        fontFamily: fontsFamily.RUBIK_REGULAR,
        fontSize: 13
    },
    duratinWrapper: {
        flexDirection: "row",
        alignItems: "center",

    },
    duration: {
        marginLeft: 5,
        color: colors.GREY
    }
})
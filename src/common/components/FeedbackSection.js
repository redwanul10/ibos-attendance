import React from 'react'
import { View, Image, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native'
// import layout from '../../../../common/styles/layout';


// fontsFamily
import helpLogo from "../../assets/images/help.png"
import feedBackLogo from "../../assets/images/feedback.png"
import layout from '../styles/layout';
import fontsFamily from '../theme/fonts';

const FeedbackSection = ({ data, containerStyle }) => {
    return (
        <View style={[style.container, containerStyle || {}]}>
            <View style={layout.row}>
                <TouchableWithoutFeedback>
                    <View style={style.feedback}>
                        <Image style={style.logo} source={helpLogo} />
                        <Text style={style.text}>Need Help</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={style.feedback}>
                        <Image style={style.logo} source={feedBackLogo} />
                        <Text style={style.text}>Give Feedback ?</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

export default FeedbackSection;

const style = StyleSheet.create({
    container: {
        paddingRight: 20
    },
    logo: {
        width: 15,
        height: 15,
        marginRight: 5
    },
    feedback: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 30,
        borderRadius: 10,
        elevation: 1
    },
    text: {
        fontFamily: fontsFamily.RUBIK_REGULAR
    }
})
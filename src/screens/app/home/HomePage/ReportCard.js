import React from 'react'
import { View, Image, StyleSheet, ImageBackground, Text } from 'react-native'
import { Col } from 'native-base';
import background from '../../../../assets/images/dashboard/card2.png';
import reportIcon from '../../../../assets/images/dashboard/reportIcon.png';
import fontsFamily from '../../../../common/theme/fonts';

const ReportCard = ({ containerStyle }) => {


    return (
        <>
            <Col style={[containerStyle, style.col]} >
                <ImageBackground source={background} resizeMode='cover' style={style.background}>
                    <View style={style.wrapper}>
                        <Image style={style.icon} source={reportIcon} />
                        <View>
                            <Text style={style.text}>Cash</Text>
                            <Text style={[style.text, style.bigText]}>5000 $</Text>
                        </View>
                    </View>
                </ImageBackground>
            </Col>

        </>
    );
}

export default ReportCard;

const style = StyleSheet.create({
    background: {
        // width: 160,
        height: 150,
        width: "100%",
        borderRadius: 20,
        // backgroundColor:"red",

        // height: "100%",
        // borderRadius:30,
        overflow: "hidden",
        resizeMode: "cover"
    },
    col: {
        width: "50%",
        // paddingHorizontal: 5
        padding: 5,
        // marginBottom: 10

    },
    icon: {
        // marginBottom: 40
    },
    wrapper: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        // display:"flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
        // alignItems:"center"
    },
    text: {
        color: "white",
        fontFamily: fontsFamily.RUBIK_REGULAR
    },
    bigText: {
        fontSize: 19,
        letterSpacing: 2,
        marginTop: 5
    }
})
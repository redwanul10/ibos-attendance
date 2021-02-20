import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native'

import fontsFamily from '../../../common/theme/fonts';
import globalStyle from '../../../common/styles/global';
import IHeader from '../../../common/components/IHeader';


const AttendanceDashboard = ({ navigation }) => {

    return (
        <>
            <IHeader title="Dashboard" />
            
            <View style={[style.container]}>
                <View>
                    <View style={style.row}>

                        <TouchableOpacity
                            onPress={e => navigation.navigate("Check in/out")}
                            style={style.col}>
                            <View style={style.singleItem}>
                                <Image style={style.image} source={require('../../../assets/images/attendance/checkIn.png')} />
                                <Text style={[globalStyle.sectionTitle, style.title]}>Check In/Out</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={e => navigation.navigate("Registration")}
                            style={style.col}>
                            <View style={style.singleItem}>
                                <Image style={style.image} source={require('../../../assets/images/attendance/registration2.png')} />
                                <Text style={[globalStyle.sectionTitle, style.title]}>Registration</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={e => navigation.navigate("AttendanceList")}
                            style={style.col}>
                            <View style={style.singleItem}>
                                <Image style={style.image} source={require('../../../assets/images/attendance/calender2.png')} />
                                <Text style={[globalStyle.sectionTitle, style.title,]}>Attendance List</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>


        </>
    );
}

export default AttendanceDashboard

const style = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,

    },
    singleSupplier: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 0.5,
        borderBottomColor: "#AEAEAE",
        paddingBottom: 10
    },
    smallText: {
        color: "#5D5C5C",
        fontSize: 12,
        fontFamily: fontsFamily.RUBIK_REGULAR

    },
    supplierTxt: {
        marginTop: 5,
        marginBottom: 5,
        fontFamily: fontsFamily.RUBIK_MEDIUM,
    },
    editIcon: {
        alignSelf: "center"
    },
    image: {
        width: 90,
        height: 80
    },
    col: {
        width: "46%",
        backgroundColor: "white",
        margin: "2%",
    },
    singleItem: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: -10
    },
    title: {
        // color: "black",
        fontSize: 14
    },
    ibosLogo: {
        flex: 1,
        alignSelf: "center",
        justifyContent: "center"
    }

})
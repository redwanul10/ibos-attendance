import React, { useEffect, useState } from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native'
// import fontsFamily from '../../../../../../../common/theme/fonts';
import { useIsFocused } from '@react-navigation/native'



import fontsFamily from '../../../common/theme/fonts';
import globalStyle from '../../../common/styles/global';
import IHeader from '../../../common/components/IHeader';
import imageFile from '../../../assets/images/imageFile';
import { useFocusEffect } from '@react-navigation/native';


const AttendanceDashboard = ({ navigation }) => {
    
    const isFocused = useIsFocused()

    useEffect(() => {
        if(isFocused){
            // alert("feftch data")
        }
    }, [isFocused])


    return (
        <>
            <IHeader hideBackBtn title="Dashboard" />
            <View style={style.container}>
                <View style={style.row}>
                    <TouchableOpacity
                        onPress={e => navigation.navigate("Check in/out")}
                        style={style.col}>
                        <View style={style.singleItem}>
                            <Image style={style.image} source={require('../../../assets/images/attendance/attendance.png')} />
                            <Text style={[globalStyle.sectionTitle, style.title]}>Attendance</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={e => navigation.navigate("Registration")}
                        style={style.col}>
                        <View style={style.singleItem}>
                            <Image style={style.image} source={require('../../../assets/images/attendance/registration.png')} />
                            <Text style={[globalStyle.sectionTitle, style.title]}>Registration</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={e => navigation.navigate("AttendanceList")}
                        style={style.col}>
                        <View style={style.singleItem}>
                            <Image style={style.image} source={require('../../../assets/images/attendance/calender.png')} />
                            <Text style={[globalStyle.sectionTitle, style.title]}>Attendance</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* <FlatList
                data={supplierData}
                keyExtractor={(item,i) => i.toString()}
                showsVerticalScrollIndicator={false}
                bounces={false}
                renderItem={item => (
                    <SingleSupplier data={item}/>
                )}
                /> */}
            </View>
        </>
    );
}

export default AttendanceDashboard

const style = StyleSheet.create({
    container: {
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
        // width:
    },
    image: {
        width: 45,
        height: 50
    },
    col: {
        width: "46%",
        backgroundColor: "white",
        margin: "2%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        borderRadius:5,
        elevation: 2,
        // marginBottom:"2%",
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.22,
        // shadowRadius: 2.22,
        // elevation: 3,
        // paddingHorizontal:10
        // marginHorizontal:10
    },
    singleItem: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15
    },
    row: {
        // display:"flex",
        flexDirection: "row",
        flexWrap: "wrap",
        // paddingHorizontal: -10
        marginHorizontal: -10
    },
    title: {
        color: "black"
    }

})
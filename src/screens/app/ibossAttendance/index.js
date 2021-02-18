import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, Linking, Alert } from "react-native"
import IHeader from '../../../common/components/IHeader';
import { Col, Button, Spinner } from 'native-base'
import fontsFamily from '../../../common/theme/fonts';
import colors from '../../../common/theme/colors';
import Map from './components/Map';
import Geolocation from '@react-native-community/geolocation';
import { getGlobalData } from '../../../common/functions/localStorage';
import { checkIn, checkOut, getCheckInCheckOutTime } from './helper';
import { _todayDate } from '../../../common/functions/_todayDate';



const IbosAttendance = () => {

    const [location, setLocation] = useState({})
    const [checkInOutTime, setcheckInOutTime] = useState({})

    const [selectedCustomer, setSelectedCustomer] = useState(null)
    const [initPageLoading, setInitPageLoading] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [globalData, setGlobalData] = useState({})


    useEffect(() => {
        // getCheckInCheckOutTime()
        getGlobalData(setGlobalData)
    }, [])

    useEffect(() => {

        if (globalData?.profileData?.userId) {
            const todayDate = _todayDate()
            getCheckInCheckOutTime(
                globalData.profileData.userId,
                todayDate,
                setcheckInOutTime,
                setInitPageLoading
            )
        }
    }, [globalData])

    useEffect(() => {

        Geolocation.getCurrentPosition(pos => {
            setLocation(pos.coords)
        }, err => {

            if (err.message === "Location permission was not granted.") {
                Alert.alert(
                    'Location Permission Required',
                    err.message,
                    [

                        {
                            text: 'Cancel',
                            onPress: () => { },
                            style: 'cancel'
                        },
                        { text: 'OK', onPress: () => Linking.openSettings() }
                    ],
                    { cancelable: true }
                );
            }


        })



    }, [])

    const saveHandler = (status) => {


        const payload = {
            intAccountId: globalData?.profileData?.accountId,
            intBusinessUnitId: globalData?.profileData?.defaultBusinessUnit || 0,
            intBusinessPartnerId: selectedCustomer?.value || 0,
            strBusinessPartnerCode: selectedCustomer?.code || "",
            // numPartnerLatitude: selectedCustomer?.latitude || 0,
            // numPartnerLongitude: selectedCustomer?.longitude || 0,
            intEmployeeId: globalData.profileData.userId || 0,
            numAttendanceLatitude: location.latitude || 0,
            numAttendanceLongitude: location.longitude || 0,
            intActionBy: globalData.profileData.userId,
        }
        // console.log(JSON.stringify(payload,null,2));


        if (status === "checkIn") {
            checkIn(
                payload,
                setIsLoading,
                //success callback
                () => {
                    getCheckInCheckOutTime(
                        globalData.profileData.userId,
                        _todayDate(),
                        setcheckInOutTime
                    )
                }
            )
        } else {
            checkOut(
                payload,
                setIsLoading,
                //success callback
                () => {
                    getCheckInCheckOutTime(
                        globalData.profileData.userId,
                        _todayDate(),
                        setcheckInOutTime
                    )
                }
            )

        }




    }
    return (
        <>
            <IHeader />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={style.container}>


                <View style={{ marginVertical: 20, }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={style.boldText}>Today</Text>
                        <Text style={style.text}>{new Date().toDateString()}</Text>
                    </View>
                </View>








                <View>
                    <Text style={style.boldText}>My Location</Text>
                    {/* <Map /> */}
                    <Map
                        location={location}
                        lat={location.latitude}
                        long={location.longitude}
                        userName={globalData?.profileData?.userName || ""}
                    />

                    {checkInOutTime && checkInOutTime?.checkInTime?.length !== checkInOutTime?.checkOutTime?.length
                        ? (
                            <Button
                                block
                                style={{ backgroundColor: "#F75A5A", borderRadius: 20 }}
                                onPress={e => saveHandler()}
                            >
                                <Text style={{ textTransform: "uppercase", color: "white", fontFamily: fontsFamily.RUBIK_BOLD }}>Check Out</Text>
                                {isLoading && <Spinner color='white' style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }} />}

                            </Button>
                        ) : (


                            <Button
                                block
                                style={{ backgroundColor: "#5DD44B", borderRadius: 20 }}
                                onPress={e => saveHandler("checkIn")}
                            >
                                <Text style={{ textTransform: "uppercase", color: "white", fontFamily: fontsFamily.RUBIK_BOLD }}>Check In</Text>
                                {isLoading && <Spinner color='white' style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }} />}
                            </Button>
                        )}

                    <View style={[style.spaceBetween, { marginTop: 20 }]}>
                        <Text style={[style.boldText, { color: "#5DD44B" }]}>Check In</Text>
                        <Text style={[style.boldText, { color: "#F75A5A" }]}>Check Out</Text>
                    </View>

                    {initPageLoading && <Spinner color='black' />}

                    <View style={[style.spaceBetween]}>
                        <View style={{ flex: 1 }}>
                            {checkInOutTime?.checkInTime?.map(item => (
                                <Text style={[style.greyColor, { padding: 5, backgroundColor: "#FAFAFA", marginBottom: 5, }]}>{item?.checkInTime}</Text>
                            ))}
                        </View>

                        <View style={{ flex: 1 }}>
                            {checkInOutTime && checkInOutTime?.checkInTime?.length !== checkInOutTime?.checkOutTime?.length && (
                                <View style={[{ alignItems: "flex-end", width: "100%", padding: 5, backgroundColor: "#FAFAFA", marginBottom: 5, }]}>
                                    <Text style={[style.greyColor,]}>*********</Text>
                                </View>
                            )}
                            {checkInOutTime?.checkOutTime?.map(item => (
                                <View style={[{ alignItems: "flex-end", width: "100%", padding: 5, backgroundColor: "#FAFAFA", marginBottom: 5, }]}>
                                    <Text style={[style.greyColor,]}>{item?.checkOutTime}</Text>
                                </View>

                            ))}
                        </View>
                    </View>

                    {/* <View style={[style.spaceBetween, { marginTop: 5 }]}>
                        <Text>10.00</Text>
                        <Text>12.30</Text>
                    </View> */}

                </View>


            </ScrollView
            >

        </>
    );
}

export default IbosAttendance;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20
    },
    boldText: {
        fontFamily: fontsFamily.RUBIK_MEDIUM,
        marginBottom: 8
    },
    smallTxt: {
        fontSize: 10
    },
    text: {
        fontFamily: fontsFamily.RUBIK_REGULAR,
        color: "#59A3EE" || colors.GREY
    },
    col: {
        borderWidth: 2,
        marginHorizontal: 5,
        alignItems: "center",
        paddingVertical: 5
    },
    lattitude: {
        backgroundColor: "#E1F0FF",
        borderColor: "#0080FF",
    },
    longitude: {
        backgroundColor: "#FFF4DE",
        borderColor: "#FFA800",
    },
    fingerPrint: {
        width: 130,
        height: 130,
        alignSelf: "center",

    },
    spaceBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    greyColor: {
        color: "#989898"
    }
})
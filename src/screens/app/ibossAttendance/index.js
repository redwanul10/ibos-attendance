import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, Linking, Alert } from "react-native"
import IHeader from '../../../common/components/IHeader';
import { Col, Button, Spinner } from 'native-base'
import fontsFamily from '../../../common/theme/fonts';
import colors from '../../../common/theme/colors';
import Map from './components/Map';
import Geolocation from '@react-native-community/geolocation';
import { getGlobalData } from '../../../common/functions/localStorage';
import { getCustomerList } from '../registration/helper';
import { checkIn, checkOut, getCheckInCheckOutTime } from './helper';
import { _todayDate } from '../../../common/functions/_todayDate';



const IbosAttendance = () => {

    const [location, setLocation] = useState({})
    const [checkInOutTime, setcheckInOutTime] = useState({
        checkIn: "",
        checkOut: ""
    })
    const [customerListDDL, setCustomerListDDL] = useState([])
    const [selectedCustomer, setSelectedCustomer] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [globalData, setGlobalData] = useState({})


    useEffect(() => {
        // getCheckInCheckOutTime()
        getGlobalData(setGlobalData)
    }, [])

    useEffect(() => {
        
        if (globalData ?.profileData ?.userId) {
            const todayDate = _todayDate()
            getCheckInCheckOutTime(
                globalData.profileData.userId,
                todayDate,
                setcheckInOutTime
            )
        }
    }, [globalData])

    useEffect(() => {

        Geolocation.getCurrentPosition(pos => {
            setLocation(pos.coords)
        }, err => {
            console.log(err)
            if (err.message === "Location permission was not granted.") {
                Alert.alert(
                    'Location Permission Required',
                    err.message,
                    [

                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
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
            intAccountId: globalData ?.profileData ?.accountId,
            intBusinessUnitId: globalData ?.profileData ?.defaultBusinessUnit || 0,
            intBusinessPartnerId: selectedCustomer ?.value || 0,
            strBusinessPartnerCode: selectedCustomer ?.code || "",
            // numPartnerLatitude: selectedCustomer?.latitude || 0,
            // numPartnerLongitude: selectedCustomer?.longitude || 0,
            intEmployeeId: globalData.profileData.userId || 0,
            numAttendanceLatitude: location.latitude || 0,
            numAttendanceLongitude: location.longitude || 0,
            intActionBy: globalData.profileData.userId,
        }

        // alert("time to send req")
        console.log(JSON.stringify(payload, null, 2))
        if (status === "checkIn") {
            checkIn(payload, setIsLoading, () => {
                getCheckInCheckOutTime(
                    globalData.profileData.userId,
                    _todayDate(),
                    setcheckInOutTime
                )
            })
        } else {
            checkOut(payload, setIsLoading, () => {
                getCheckInCheckOutTime(
                    globalData.profileData.userId,
                    _todayDate(),
                    setcheckInOutTime
                )
            })
            
        }




    }
    return (
        <>
            <IHeader />
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={style.container}>
                

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <Col>
                        <Text style={style.boldText}>Today</Text>
                        <Text style={style.text}>{new Date().toDateString()}</Text>
                    </Col>
                    <Col>
                        {location.latitude && location.longitude && (<View style={{ flexDirection: "row", backgroundColor: "transparent", marginHorizontal: -4 }}>
                            <Col style={[style.col, style.lattitude]}>
                                <Text style={[style.boldText, style.smallTxt]}>Lattitude</Text>
                                <Text style={[style.boldText, style.smallTxt]}>{location.latitude || 0.0}</Text>
                            </Col>
                            <Col style={[style.col, style.longitude]}>
                                <Text style={[style.boldText, style.smallTxt]}>Longitude</Text>
                                <Text style={[style.boldText, style.smallTxt]}>{location.longitude || 0.0}</Text>
                            </Col>
                        </View>)}
                    </Col>
                </View>

            


                <View style={{ marginTop: 20, flexDirection: "row", backgroundColor: "transparent", marginHorizontal: -4 }}>
                    <Col style={[style.col, style.lattitude, { borderColor: "transparent" }]}>
                        <Text style={[style.boldText, style.smallTxt, { color: "#0080FF" }]}>Check In Time</Text>
                        <Text style={[style.boldText, style.smallTxt]}>{checkInOutTime.checkIn || "00.00"}</Text>
                    </Col>
                    <Col style={[style.col, style.longitude, { borderColor: "transparent", backgroundColor: "#FFD8D8" }]}>
                        <Text style={[style.boldText, style.smallTxt, { color: "red" }]}>Check Out Time</Text>
                        <Text style={[style.boldText, style.smallTxt]}>{checkInOutTime.checkOut || "00.00"}</Text>
                    </Col>
                </View>

                <View style={{ alignSelf: "center", width: "50%", marginTop: 20, marginBottom: 40, flexDirection: "row", backgroundColor: "transparent", marginHorizontal: -4 }}>
                    <Col style={[style.col, style.lattitude, { borderColor: "transparent", backgroundColor: "#B3FFD6" }]}>
                        <Text style={[style.boldText, style.smallTxt, { color: "#399162" }]}>Check In Time</Text>
                        <Text style={[style.boldText, style.smallTxt]}>9.00 am</Text>
                    </Col>
                </View>

                

                {location.latitude && location.longitude && (
                    <View>
                        <Text style={style.boldText}>My Location</Text>
                        {/* <Map /> */}
                        <Map
                            location={location}
                            lat={location.latitude}
                            long={location.longitude}
                            userName={globalData ?.profileData ?.userName || ""}
                        />

                        {!checkInOutTime ?.checkOut && !checkInOutTime ?.checkIn
                            ? (
                                <Button
                                    block
                                    style={{ backgroundColor: "#0080FF" }}
                                    onPress={e => saveHandler("checkIn")}
                                >
                                    <Text style={{ textTransform: "uppercase", color: "white", fontFamily: fontsFamily.RUBIK_BOLD }}>Check In</Text>
                                    {isLoading && <Spinner color='white' style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }} />}
                                </Button>
                            ) : (
                                <Button
                                    block
                                    style={{ marginTop: 10, backgroundColor: "red" }}
                                    onPress={e => saveHandler()}
                                >
                                    <Text style={{ textTransform: "uppercase", color: "white", fontFamily: fontsFamily.RUBIK_BOLD }}>Check Out</Text>
                                    {isLoading && <Spinner color='white' style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }} />}
                                </Button>
                            )}



                    </View>
                )}

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
        marginBottom: 5
    },
    smallTxt: {
        fontSize: 10
    },
    text: {
        fontFamily: fontsFamily.RUBIK_REGULAR,
        color: colors.GREY
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

    }
})
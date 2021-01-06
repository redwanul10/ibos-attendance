import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Linking, Alert } from "react-native"
import IHeader from '../../../common/components/IHeader';
import ICustomPicker from '../../../common/components/ICustomPicker';
import { Row, Col, Button } from 'native-base'
import globalStyle from '../../../common/styles/global';
import fontsFamily from '../../../common/theme/fonts';
import colors from '../../../common/theme/colors';
import Map from './components/Map';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
// import imageFile from '../../../assets/images/fingerPring.png';
import Geolocation from '@react-native-community/geolocation';

const IbosAttendance = () => {

    const [location, setLocation] = useState({})
    console.log(location)
    useEffect(() => {
        Geolocation.getCurrentPosition(pos => {
            // console.log(JSON.stringify(pos, null, 2))
            // "coords":
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

        // check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        //     .then((result) => {
        //         switch (result) {
        //             case RESULTS.UNAVAILABLE:
        //                 console.warn('This feature is not available (on this device / in this context)');
        //                 break;
        //             case RESULTS.DENIED:
        //                 console.warn('The permission has not been requested / is denied but requestable');
        //                 request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result) => {
        //                     console.log(result)
        //                 });
        //                 break;
        //             case RESULTS.LIMITED:
        //                 console.warn('The permission is limited: some actions are possible');
        //                 break;
        //             case RESULTS.GRANTED:
        //                 console.warn('The permission is granted');

        //                 break;
        //             case RESULTS.BLOCKED:
        //                 console.warn('The permission is denied and not requestable anymore');
        //                 break;
        //         }
        //     })
        //     .catch((error) => {
        //         // …
        //     });
    }, [])
    return (
        <>
            <IHeader title="Add Attendance" />
            <View style={style.container}>
                <ICustomPicker
                    label="Job Station List"
                    value={{}}
                    options={[]}
                />

                <View style={{ flexDirection: "row" }}>
                    <Col>
                        <Text style={style.boldText}>Today</Text>
                        <Text style={style.text}>{new Date().toDateString()}</Text>
                    </Col>
                    <Col>
                        <View style={{ flexDirection: "row", backgroundColor: "transparent", marginHorizontal: -4 }}>
                            <Col style={[style.col, style.lattitude]}>
                                <Text style={[style.boldText, style.smallTxt]}>Lattitude</Text>
                                <Text style={[style.boldText, style.smallTxt]}>{location.latitude || 0.0}</Text>
                            </Col>
                            <Col style={[style.col, style.longitude]}>
                                <Text style={[style.boldText, style.smallTxt]}>Longitude</Text>
                                <Text style={[style.boldText, style.smallTxt]}>{location.longitude || 0.0}</Text>
                            </Col>
                        </View>
                    </Col>
                </View>

                <TouchableOpacity style={[style.fingerPrint, { marginVertical: 50 }]}>
                    <Image
                        style={style.fingerPrint}
                        source={require('../../../assets/images/fingerPrint.png')}
                    />
                </TouchableOpacity>

                <View>
                    <Text style={style.boldText}>My Location</Text>
                    {/* <Map /> */}
                    <Map location={location} lat={location.latitude} long={location.longitude} />
                    <Button
                        block
                        style={{ backgroundColor: "#0080FF" }}
                    >
                        <Text style={{ textTransform: "uppercase", color: "white", fontFamily: fontsFamily.RUBIK_BOLD }}>Save Attendance</Text>
                    </Button>
                </View>

            </View>

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
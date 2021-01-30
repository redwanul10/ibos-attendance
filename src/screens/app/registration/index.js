import React, { useEffect, useState } from 'react';
import { AppState, StyleSheet, View, Text, Image, TouchableOpacity, Linking, Alert } from "react-native"
import IHeader from '../../../common/components/IHeader';
import ICustomPicker from '../../../common/components/ICustomPicker';
import { Row, Col, Button } from 'native-base'
import globalStyle from '../../../common/styles/global';
import fontsFamily from '../../../common/theme/fonts';
import colors from '../../../common/theme/colors';
import Map from './components/Map';
import Geolocation from '@react-native-community/geolocation';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import { Toast } from 'native-base'
import { getCustomerList, registerAttentance } from './helper'
import { getGlobalData } from '../../../common/functions/localStorage';


const RegistrationAttendance = () => {

    const [location, setLocation] = useState({})
    const [customerListDDL, setCustomerListDDL] = useState([])
    const [globalData, setGlobalData] = useState({})

    const [selectedCustomer, setSelectedCustomer] = useState(null)

    const [appState, setAppState] = useState(1)
    const [app, setApp] = useState(1)

    const handleAppStateChange = (nextAppState) => {
        // if (appState && appState.match(/inactive|background/) && nextAppState === 'active') {
        //     FingerprintScanner.release();
        //     // this.detectFingerprintAvailable();
        // }
        // setAppState(nextAppState);
    }

    useEffect(() => {
        getGlobalData(setGlobalData)
    }, [])

    useEffect(() => {
        if (globalData ?.profileData ?.userId) {
            getCustomerList(
                globalData.profileData.userId,
                setCustomerListDDL
            )
        }
    }, [globalData])

    useEffect(() => {

        // AppState.addEventListener('change', handleAppStateChange);

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

            // return () => {
            //     AppState.removeEventListener('change', handleAppStateChange);
            // }

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

    const registerHandler = () => {
        const payload = {
            accountId: globalData ?.profileData ?.accountId,
            businessUnitId: globalData ?.profileData ?.defaultBusinessUnit || 0,
            businessPartnerId: selectedCustomer ?.value || 0,
            numLatitude: location ?.latitude || 0,
            numLongitude: location ?.longitude || 0,
            actionBy: globalData ?.profileData ?.userId || 0,
            businessPartnerCode: selectedCustomer ?.code || ""
        }

        if (!selectedCustomer) {
            Toast.show({
                text: "Select a Customer",
                buttonText: "close",
                type: "danger",
                duration: 3000
            })
        } else {
            registerAttentance(payload)
        }
    }

    return (
        <>
            <IHeader title="Registration" />
            <View style={style.container}>
                <ICustomPicker
                    wrapperStyle={{ marginTop: 20, backgroundColor: "#0000000F", borderBottomColor: "transparent", padding: 5, paddingLeft: 20 }}
                    label="Customer List"
                    value={selectedCustomer || {}}
                    options={customerListDDL}
                    onChange={item => {
                        // alert(item.label)
                        setSelectedCustomer(item)
                    }}
                />

                {/* <Text>{JSON.stringify(globalData)}</Text> */}

                <View style={{ flexDirection: "row", marginVertical: "15%" }}>
                    {/* <Col>
                        <Text style={style.boldText}>Today</Text>
                        <Text style={style.text}>{new Date().toDateString()}</Text>
                    </Col> */}
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

                {/* <ICalender /> */}

                {/* <TouchableOpacity onPress={e => {
                    FingerprintScanner
                        .authenticate({ description: 'Scan your fingerprint to continue' })
                        .then(() => {
                            //  this.props.handlePopupDismissed();
                            // alert('Authenticated successfully');
                            Toast.show({
                                text: "login Successfull",
                                buttonText: "close",
                                type: "success",
                                duration: 3000
                            })
                            FingerprintScanner.release()
                        })
                        .catch((error) => {
                            //  this.props.handlePopupDismissed();
                            console.log(error)
                            Toast.show({
                                text: error.message,
                                buttonText: "close",
                                type: "danger",
                                duration: 3000
                            })
                            // alert(error.message);
                            FingerprintScanner.release()
                        });
                    // setTimeout(e => FingerprintScanner.release(), 2000)
                }} style={[style.fingerPrint, { marginVertical: 50 }]}>
                    <Image
                        style={style.fingerPrint}
                        source={require('../../../assets/images/fingerPrint.png')}
                    />
                </TouchableOpacity> */}

                <View>
                    <Text style={style.boldText}>My Location</Text>
                    <Map location={location} lat={location.latitude} long={location.longitude} />
                    <Button
                        block
                        style={{ backgroundColor: "#0080FF" }}
                        onPress={e => registerHandler()}
                    >
                        <Text style={{ textTransform: "uppercase", color: "white", fontFamily: fontsFamily.RUBIK_BOLD }}>Submit</Text>
                    </Button>
                </View>

            </View>

        </>
    );
}

export default RegistrationAttendance;

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
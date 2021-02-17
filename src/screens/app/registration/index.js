import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Linking, Alert } from "react-native"
import IHeader from '../../../common/components/IHeader';
import ICustomPicker from '../../../common/components/ICustomPicker';
import { Button, Spinner } from 'native-base'
import fontsFamily from '../../../common/theme/fonts';
import colors from '../../../common/theme/colors';
import Map from './components/Map';
import Geolocation from '@react-native-community/geolocation';
import { Toast } from 'native-base'
import { getCustomerList, registerAttentance } from './helper'
import { getGlobalData } from '../../../common/functions/localStorage';
import SuccessModal from './components/successModal';

const RegistrationAttendance = () => {

    const [location, setLocation] = useState({})
    const [customerListDDL, setCustomerListDDL] = useState([])
    const [globalData, setGlobalData] = useState({})

    const [selectedCustomer, setSelectedCustomer] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [showModal, setModal] = useState(false)


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
                text: "Select Attendance Point",
                type: "danger",
                duration: 3000
            })
        } else {
            registerAttentance(payload, setIsLoading, setModal)
        }
    }

    return (
        <>
            <SuccessModal
                visible={showModal}
                onClose={e => setModal(false)}
            />

            <IHeader title="Registration" />

            <View style={style.container}>
                <View style={{ marginVertical: 20 }}>
                    <ICustomPicker
                        label="Attendance Point"
                        labelStyle={[style.boldText, { marginBottom: 0, color: "black" }]}
                        value={selectedCustomer || {}}
                        options={customerListDDL}
                        onChange={item => {
                            setSelectedCustomer(item)
                        }}
                    />
                </View>

                <View>
                    <Text style={style.boldText}>My Location</Text>
                    <Map
                        location={location}
                        lat={location.latitude}
                        long={location.longitude}
                        userName={globalData ?.profileData ?.userName || ""}
                    />
                    <Button
                        block
                        style={{ backgroundColor: "#0080FF", borderRadius: 20 }}
                        onPress={e => registerHandler()}
                    >
                        <Text style={{ textTransform: "capitalize", color: "white", fontFamily: fontsFamily.RUBIK_BOLD }}>Submit</Text>
                        {isLoading && <Spinner color='white' style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }} />}
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
        marginBottom: 8
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

    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121E4499',


    },
    modalStyle: {
        width: 340,
        height: 183,
        backgroundColor: '#fff',

        borderRadius: 15,


    }
})
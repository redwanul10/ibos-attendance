import React, { useState, useEffect } from 'react'
import {
    StatusBar,
    Keyboard,
    Text,
    TouchableWithoutFeedback,
    ScrollView,
    Modal,
    View,
    StyleSheet,
    Linking,
    KeyboardAvoidingView,
    Image,
    TouchableOpacity
} from 'react-native'
import { Formik } from "formik";
import { Button, Spinner } from "native-base";
import FormInput from '../../../common/components/TextInput';
import * as Yup from 'yup'
import { loginAction } from './helper';
import loginBgImg from '../../../assets/images/loginBg.png';
import logoBanner from '../../../assets/images/loginBanner.png';
import logo from '../../../assets/images/loginLogo.png'
import { getGlobalData } from '../../../common/functions/localStorage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'


import checkVersion from 'react-native-store-version';


const initValues = {
    email: 'alamin@akij.net',
    password: "",
}

const schemaValidation = Yup.object().shape({
    password: Yup.string()
        .min(8, "Must be 8 Character").
        required("Password is Required"),

    email: Yup.string()
        .email("Invalid Email").
        required("Email is Required")
})


const Login = ({ navigation }) => {


    const [globalData, setGlobalData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isLatest, setLatest] = useState(false);


    const onStoreButtonPress = () => {
        // if (Platform.OS === 'ios') {
        // Linking.openURL('https://itunes.apple.com/app/id1321198947?mt=8');
        // } else {
        Linking.openURL('https://play.google.com/store/apps/details?id=com.ibos');
        // }
    };

    useEffect(() => {
        const init = async () => {


            try {
                const check = await checkVersion({

                    version: '1.5',
                    // iosStoreURL: 'https://itunes.apple.com/jp/app/kokura-keirin/id1444261040',
                    androidStoreURL: 'https://play.google.com/store/apps/details?id=com.ibos',
                });

                if (check.result === 'new') {

                    setLatest(true);
                }
            } catch (e) {
                console.log(e.message);
            }
        };

        init();
    }, []);





    useEffect(() => {
        getGlobalData(setGlobalData)

    }, [])

    useEffect(() => {
        StatusBar.setBackgroundColor("#121E44")
        StatusBar.setTranslucent(false)

    }, [])

    const modalOff = () => {
        setLatest(false);
    };

    return (
        <>

            <Modal animationType="fade" transparent visible={isLatest} onRequestClose={() => { }}>

                <View style={style.centeredView}>

                    <View style={style.modalStyle} >

                        <Text style={{ alignSelf: 'center', marginVertical: 30, fontSize: 20, color: 'gray' }}>A NEW UPDATE IS AVAILABLE</Text>
                        <View
                            style={{
                                borderBottomColor: 'gray',
                                borderBottomWidth: 1,
                            }}
                        />

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20 }}>

                            <TouchableOpacity style={{ backgroundColor: 'red',width:100, margin: 2, padding: 10, borderRadius: 5, marginHorizontal: 15 }} onPress={modalOff} >

                                <Text style={{ color: 'white', textAlign:'center' }} >CLOSE</Text>

                            </TouchableOpacity>
                            <View
                                style={{
                                    borderRightColor: 'black',
                                    borderRightWidth: 5,
                                }}
                            />

                            <TouchableOpacity style={{ margin: 2, backgroundColor: 'green',width:100, padding: 10, borderRadius: 5, marginHorizontal: 15 }} onPress={onStoreButtonPress}>

                                <Text style={{ color: 'white',textAlign:'center' }} >UPDATE</Text>


                            </TouchableOpacity>



                        </View>

                    </View>
                </View>
            </Modal>







            <KeyboardAwareScrollView style={{ backgroundColor: 'white' }}>

                <View style={{ alignItems: "flex-start", backgroundColor: "white" }}>

                    <Image style={{ width: '100%', height: 100, position: 'relative' }} source={logoBanner} resizeMode="stretch" />

                </View>



                <View style={style.backgroundStyle}>



                    <TouchableWithoutFeedback onPress={e => Keyboard.dismiss()}>

                        <>
                            {/* <View style={{ marginBottom: "15%", alignItems: "stretch" }}>

                            <Image style={{  height: 200,backgroundColor:"white" }} source={logo} resizeMode="stretch" />

                        </View> */}
                            <Image style={{ alignSelf: 'center', height: 100 }} source={logo} resizeMode="contain" />

                            <View style={{ alignItems: 'center', margin: 25 }}>
                                <Text style={{ color: '#121E44', fontWeight: 'bold', fontSize: 20 }}>Welcome to iBOS ERP!</Text>
                                <Text style={{ color: '#0C9EF2' }}>Sign in to continue</Text>

                            </View>

                            <View >


                                <Formik
                                    enableReinitialize={true}
                                    initialValues={{ ...initValues, email: globalData?.profileData?.emailAddress || "" }}
                                    validationSchema={schemaValidation}
                                    onSubmit={(values, { resetForm }) => {
                                        const { email, password } = values
                                        const customcb = () => {
                                            resetForm()

                                            navigation.navigate("Attendance Dashboard")
                                        }
                                        loginAction(email, password, setIsLoading, customcb)
                                    }}
                                >
                                    {(formikProps) => (
                                        <View>

                                            <FormInput
                                                name="email"
                                                label="Email"
                                                formikProps={formikProps}
                                            />

                                            <FormInput
                                                name="password"
                                                label="Password"
                                                formikProps={formikProps}
                                                secureTextEntry={true}
                                            />




                                            <Button
                                                block
                                                onPress={e => {
                                                    formikProps.handleSubmit()
                                                }}
                                                style={style.btnStyle}>

                                                <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
                                                    Log In
                                        </Text>

                                                {isLoading && <Spinner color='white' style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }} />}


                                            </Button>

                                        </View>
                                    )}
                                </Formik>
                            </View >
                        </>
                    </TouchableWithoutFeedback>

                </View>
            </KeyboardAwareScrollView>
        </>
    );
}


const style = StyleSheet.create({

    backgroundStyle: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 24,
        paddingTop: 50
    },
    logo: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 234,
        height: 166
    },
    btnStyle: {
        backgroundColor: "#121E44",
        marginTop: 20,
        height: 50,
        borderRadius: 50

    },

    removeBtnStyle: {
        backgroundColor: "transparent",
        elevation: 0,
    },
    label: {
        fontSize: 14,
        color: "#636363",
        fontFamily: "Rubik-Regular"
    },
    inputWrapper: {
        marginBottom: 10
    },
    footer: {
        alignItems: "center",
        marginBottom: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    footerText: {
        fontSize: 16,
        color: "#636363",
        fontFamily: "Rubik-Regular",
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        padding: 0,
        fontFamily: "Rubik-Medium"
    },
    formHeader: {
        marginBottom: 23,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: "white",
        position: "relative",
    },
    innerContent: {
        marginBottom: 30
    },
    formTitle: {
        fontSize: 30,
        fontFamily: "Rubik-Bold"
    },
    formSubTitle: {
        marginTop: 3,
        fontFamily: "Rubik-Light"
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

export default Login;
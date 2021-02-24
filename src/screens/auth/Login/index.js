import React, { useState, useEffect } from 'react'
import { StatusBar, Keyboard, Text, TouchableWithoutFeedback, ScrollView, ImageBackground, View, StyleSheet, TextInput, KeyboardAvoidingView, Image, SafeAreaView } from 'react-native'
import { Formik } from "formik";
import { Button, Spinner } from "native-base";
import FormInput from '../../../common/components/TextInput';
import * as Yup from 'yup'
import { loginAction } from './helper';
import loginBgImg from '../../../assets/images/loginBg.png';
import logoBanner from '../../../assets/images/loginBanner.png';
import logo from '../../../assets/images/loginLogo.png'
import { getGlobalData } from '../../../common/functions/localStorage';


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

    useEffect(() => {
        getGlobalData(setGlobalData)

    }, [])

    useEffect(() => {
        StatusBar.setBackgroundColor("#0080FF")
        StatusBar.setTranslucent(false)

    }, [])

    return (
        <>
            <View style={{ alignItems: "center" }}>

                <Image style={{ width: "100%", height: 100, backgroundColor: "white" }} source={logoBanner} resizeMode="stretch" />

            </View>

            <View style={style.backgroundStyle}>



                <TouchableWithoutFeedback onPress={e => Keyboard.dismiss()}>

                    <>
                        {/* <View style={{ marginBottom: "15%", alignItems: "stretch" }}>

                            <Image style={{  height: 200,backgroundColor:"white" }} source={logo} resizeMode="stretch" />

                        </View> */}
                        <Image style={{ alignSelf: 'center', height: 100 }} source={logo} resizeMode="contain" />

                        <View style={{alignItems:'center',margin:25}}>
                            <Text style={{color:'#121E44',fontWeight:'bold',fontSize:20}}>Welcome to iBOS ERP!</Text>
                            <Text style={{color:'#0C9EF2'}}>Sign in to continue</Text>

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
        </>
    );
}


const style = StyleSheet.create({

    backgroundStyle: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 24
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
    }
})

export default Login;
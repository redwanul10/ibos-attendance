import React, { useState, useEffect } from 'react'
import { StatusBar, Keyboard, Text, TouchableWithoutFeedback, ImageBackground, View, StyleSheet, TextInput, KeyboardAvoidingView, Image, SafeAreaView } from 'react-native'
// import formStyle from '../../../common/styles/formStyle'
import { Formik } from "formik";
import { Button, Spinner } from "native-base";
import FormInput from '../../../common/components/TextInput';
import * as Yup from 'yup'
import { loginAction } from './helper';
import loginBgImg from '../../../assets/images/loginBg.png';
import logo from '../../../assets/images/pageLogo.png';

const initValues = {
    email: '01749508249',
    password: "12345678",
}

const schemaValidation = Yup.object().shape({
    password: Yup.string()
        .min(8, "Must be 8 Charecter").
        required("Password is Required"),

    email: Yup.string()
        .email("Invalid Email").
        required("Email is Required")
})


const Login = ({ navigation }) => {


    useEffect(() => {
        StatusBar.setBackgroundColor("#66DBA8")
        StatusBar.setTranslucent(false)

    }, [])

    const [rememberPass, setRememberPass] = useState(false)

    return (

        // <KeyboardAvoidingView
        //     behavior={Platform.OS === "ios" ? "padding" : null}
        //     style={{ flex: 1 }}
        // ></KeyboardAvoidingView>
        <ImageBackground source={loginBgImg} style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={e => Keyboard.dismiss()}>
                <View style={style.container}>

                    {/* <Image
                        style={style.logo}
                        source={registerImage}
                    /> */}

                    {/* Form Header */}
                    <View style={style.formHeader}>
                        <View>
                            <Text style={style.formTitle}>Welcomee</Text>
                            <Text style={style.formSubTitle}>Please sign-in to continue</Text>
                        </View>
                        <Image source={logo} />
                    </View>



                    <Formik
                        enableReinitialize={true}
                        initialValues={initValues}
                        onSubmit={(values, { resetForm }) => {
                            const { email, password } = values
                            const customcb = () => {
                                resetForm()
                                navigation.navigate('Home')
                            }
                            loginAction(email, password, customcb)
                        }}
                        // validationSchema={schemaValidation}
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
                                    style={{
                                        backgroundColor: "#66DBA8",
                                        marginTop: 20,
                                        height: 50,
                                        borderRadius: 50
                                    }}>
                                    <Text style={{
                                        color: "white",
                                        fontSize: 16,
                                        fontWeight: "bold"
                                    }}>
                                        Sign In
                                </Text>
                                    {/* <Spinner color='white' style={{ transform: [{ scaleX: 0.6 }, { scaleY: 0.6 }] }} /> */}
                                </Button>





                                <TouchableWithoutFeedback
                                    onPress={e => {
                                        navigation.navigate("Register")
                                        formikProps.resetForm(initValues)
                                    }}
                                >
                                    <View style={style.footer}>
                                        <Text style={[style.footerText, { marginTop: 11, marginBottom: 13 }]}>
                                            Dont have an account ?
                                    </Text>
                                        <Text style={{ marginLeft: 8, fontFamily: "Rubik-Bold", color: "black" }}>Sign Up</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        )}
                    </Formik>
                    {/* </KeyboardAvoidingView> */}
                </View >
            </TouchableWithoutFeedback>
        </ImageBackground>

    );
}


const style = StyleSheet.create({
    logo: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 234,
        height: 166
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
        // backgroundColor:"red",
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        padding: 0,
        fontFamily: "Rubik-Medium"
    },
    formHeader: {
        marginBottom: 23,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    container: {
        flex: 1,
        // backgroundColor: "#FFFFFF",
        paddingHorizontal: 24,
        // justifyContent: "center",
        marginTop:"35%",
        position: "relative",
    },
    innerContent: {
        marginBottom: 30
    },
    formTitle: {
        fontSize: 30,
        // fontWeight: "bold",
        // marginTop: 145,
        fontFamily: "Rubik-Bold"
    },
    formSubTitle: {
        marginTop: 3,
        fontFamily: "Rubik-Light"
    }
})

export default Login;
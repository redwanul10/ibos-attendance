import React, { useEffect } from 'react';
import {
  Text,
  Platform,
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  ImageBackground,
  StatusBar
} from 'react-native';
// import formStyle from '../../../common/styles/formStyle'
import { Formik } from 'formik';
// import FormInput from '../../../common/components/TextInput';
import CustomBtn from '../../../common/components/customBtn';
import { Button } from 'native-base';
import registerImage from './register.png';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import FormInput from '../../../common/components/TextInput';
import loginBgImg from '../../../assets/images/loginBg.png';
import logo from '../../../assets/images/pageLogo.png';
import * as Yup from 'yup'


const initValues = {
  fullName: '',
  phone: '',
  password: '',
  confirmPassword: '',
  shopName: '',
};

const schemaValidation = Yup.object().shape({
  password: Yup.string().min(8, "Must be 8 Charecter").required("Password is Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match').required("Password is Required"),
  phone: Yup.number().min(11, "Invalid Phone Number").required("Phone is Required"),
  fullName: Yup.string().required("Full Name is Required"),
  shopName: Yup.string().required("Shop Name is Required"),
})

const Register = ({ navigation }) => {

  // useEffect(() => {
  //   StatusBar.setBackgroundColor("red")
  //   StatusBar.setTranslucent(false)
  // }, [])
  return (
    // <KeyboardAvoidingView
    //     behavior={Platform.OS === "ios" ? "padding" : null}
    //     style={{ flex: 1 }}
    // ></KeyboardAvoidingView>
    <ImageBackground source={loginBgImg} style={{ flex: 1 }}>
      <KeyboardAwareScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={[style.container, { paddingHorizontal: 0 }]}
      >
        {/* Code from above */}

        {/* <Image style={style.logo} source={registerImage} /> */}
        <View style={{ paddingHorizontal: 20, }}>

          {/* Form Header */}
          <View style={style.formHeader}>
            <View>
              <Text style={style.formTitle}>Welcomee</Text>
              <Text style={style.formSubTitle}>Please sign-in to continue</Text>
            </View>
            <Image source={logo} />
          </View>

          <Formik
            initialValues={initValues}
            validationSchema={schemaValidation}
            onSubmit={(values, { resetForm }) => {
              resetForm(initValues)
              navigation.navigate("Home")
            }}>
            {(formikProps) => (
              <View>
                <FormInput
                  name="fullName"
                  label="Full Name"
                  formikProps={formikProps}
                />

                <FormInput
                  name="phone"
                  label="phone"
                  formikProps={formikProps}
                  keyboardType="numeric"
                />

                <FormInput
                  name="shopName"
                  label="shopName"
                  formikProps={formikProps}
                />
                <FormInput
                  name="password"
                  label="Password"
                  formikProps={formikProps}
                  secureTextEntry={true}
                />
                <FormInput
                  name="confirmPassword"
                  label="Confirm Password"
                  formikProps={formikProps}
                  secureTextEntry={true}
                />
                <Button
                  block
                  onPress={formikProps.handleSubmit}
                  style={{
                    backgroundColor: '#66DBA8',
                    marginTop: 20,
                    height: 50,
                    borderRadius: 50,
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    Sign Up
              </Text>
                </Button>

                <TouchableWithoutFeedback
                  onPress={(e) => {
                    navigation.navigate('Login')
                    formikProps.resetForm(initValues)
                  }}>
                  <View style={style.footer}>
                    <Text
                      style={[style.footerText, { marginTop: 11, marginBottom: 13 }]}>
                      Already have an account ?
                </Text>
                    <Text
                      style={{
                        marginLeft: 8,
                        fontFamily: 'Rubik-Bold',
                        color: 'black',
                      }}>
                      Sign In
                </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            )}
          </Formik>
        </View>
        {/* </KeyboardAvoidingView> */}
      </KeyboardAwareScrollView >
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  logo: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 174,
    height: 209,
  },
  label: {
    fontSize: 14,
    color: '#636363',
    fontFamily: 'Rubik-Regular',
  },
  inputWrapper: {
    marginBottom: 10,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#636363',
    fontFamily: 'Rubik-Regular',
  },
  input: {
    // backgroundColor:"red",
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    padding: 0,
    fontFamily: 'Rubik-Medium',
    // height:30,
    // fontSize:14,
    // fontWeight: "bold"
  },
  formHeader: {
    marginBottom: 23,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  container: {
    flex: 1,
    // backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    // justifyContent: 'center',
    marginTop:"35%",
    position: 'relative',
  },
  innerContent: {
    marginBottom: 30,
  },
  formTitle: {
    fontSize: 30,
    // fontWeight: "bold",
    // marginTop: 145,
    // marginTop: 145,
    fontFamily: 'Rubik-Bold',
  },
  formSubTitle: {
    marginTop: 3,
    fontFamily: 'Rubik-Light',
  },
});

export default Register;

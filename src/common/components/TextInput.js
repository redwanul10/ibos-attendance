import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { CheckBox } from 'native-base';
// import { Colors, Metrics, Fonts } from "../../theme/";

const FormInput = (props) => {

  const {
    placeholder,
    formikProps,
    name,
    label,
    // style,
    secureTextEntry
  } = props

  const [checked, setChecked] = useState(false)
  const isError = formikProps.touched[name] && formikProps.errors[name] ? true : false
  return (
    <>
      <View style={style.inputWrapper}>
        <Text style={[style.label, { color: isError ? "red" : "#636363" }]}>{label}</Text>
        <TextInput
          style={[style.input, { borderBottomColor: isError ? "red" : "grey" }]}
          onChangeText={formikProps.handleChange(name)}
          onFocus={formikProps.onFocus}
          onBlur={e => {
            formikProps.setFieldTouched(name, true);
            // formikProps.handleBlur(name)
          }}
          value={formikProps.values[name]}
          secureTextEntry={secureTextEntry || false}
          placeholder={"Enter " + (placeholder || label)}
          placeholderTextColor="black"
          {...props}
        />
      </View>

      {/* <CheckBox checkboxTickColor="red" checked={checked} onPress={e => setChecked(!checked)} /> */}

      {formikProps.touched[name] && formikProps.errors[name] && (
        <Text style={style.error}>
          {formikProps.errors[name]}
        </Text>
      )}
    </>
  );
};

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
    fontFamily: "Rubik-Regular"
  },
  error: {
    color: "red",
    fontSize: 9,
    marginTop: -8,
    marginBottom: 5
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
    // height:30,
    // fontSize:14,
    // fontWeight: "bold"
  },
  formHeader: {
    marginBottom: 23
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    justifyContent: "center",
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

export default FormInput;

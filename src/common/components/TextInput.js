import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
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
          placeholder={placeholder}
          {...props}
        />
      </View>

      {formikProps.touched[name] && formikProps.errors[name] && (
        <Text style={style.error}>
          {formikProps.errors[name]}
        </Text>
      )}
    </>
  );
};

const style = StyleSheet.create({
  
  
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
  
  input: {
    // borderBottomWidth: 1,
    // borderBottomColor: "grey",
    borderBottomWidth: 0.5,
        borderBottomColor: "#AEAEAE",
    padding: 0,
    fontFamily: "Rubik-Medium"
  },
  formHeader: {
    marginBottom: 23
  },
  
})

export default FormInput;

import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker';

const IPicker = (props) => {

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
        {console.log(formikProps.values)}
            <View style={[style.inputWrapper, { borderBottomWidth: 1, borderBottomColor: "grey" }]}>
                <Text style={[style.label, { color: isError ? "red" : "#636363" }]}>{label}</Text>
                
                <Picker
                      selectedValue={formikProps.values[name]}
                    itemStyle={{ fontSize: 12, color: "red" }}
                    style={{ height: 30, width: "100%", fontSize: 12 }}
                  onValueChange={(itemValue, itemIndex) =>{
                    console.log(itemValue)
                   formikProps.setFieldValue(name,itemValue)}
                  }
                >
                    <Picker.Item label="....." value="" />
                    <Picker.Item label="Brack" value="Brack" />
                    <Picker.Item label="DuchBangla" value="DuchBangla" />
                    <Picker.Item label="Islami" value="Islami" />
                </Picker>
            </View>

            
            {formikProps.touched[name] && formikProps.errors[name] && (
                <Text style={style.error}>
                    {formikProps.errors[name]}
                </Text>
            )}

        </>
    );
}

export default IPicker

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

})
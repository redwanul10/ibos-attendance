import React, { useState } from 'react'
import { View, StyleSheet, Text, Modal, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { DatePicker } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';

const IDatePicker = (props) => {

    const {
        placeholder,
        formikProps,
        name,
        label,
        // style,
        secureTextEntry
    } = props

    const [modalActive, setModalActive] = useState(false)
    const isError = formikProps.touched[name] && formikProps.errors[name] ? true : false

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        formikProps.setFieldValue(name, currentDate.toDateString());
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    //   const showMode = (currentMode) => {
    //     setShow(true);
    //     // setMode(currentMode);
    //   };

    console.log(formikProps.values.date)

    return (
        <>
            <View style={[style.inputWrapper]}>
                <TouchableOpacity onPress={e => showDatepicker()}>
                    <Text style={[style.label, { color: isError ? "red" : "#636363" }]}>{label}</Text>
                    <TextInput
                        editable={false}
                        style={[style.input]}
                        onChangeText={formikProps.handleChange(name)}
                        onFocus={formikProps.onFocus}
                        onBlur={e => {
                            formikProps.setFieldTouched(name, true);
                            // formikProps.handleBlur(name)
                        }}
                        value={formikProps.values[name]}
                        secureTextEntry={secureTextEntry || false}
                        placeholder={"Select"}
                        placeholderTextColor="black"
                        {...props}
                    />
                    {/* <DatePicker
                        defaultDate={formikProps.values.name}
                        // minimumDate={new Date(2018, 1, 1)}
                        // maximumDate={new Date(2018, 12, 31)}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText={formikProps.values.name ? formikProps.values.name : null}
                        textStyle={style.input}
                        placeHolderTextStyle={style.input}
                        onDateChange={formikProps.handleChange(name)}
                        disabled={false}
                    /> */}
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode="Date"
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}

                </TouchableOpacity>
            </View>


            {formikProps.touched[name] && formikProps.errors[name] && (
                <Text style={style.error}>
                    {formikProps.errors[name]}
                </Text>
            )}

        </>
    );
}

export default IDatePicker

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
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "grey",
    },

    input: {
        // backgroundColor:"red",

        padding: 0,
        fontFamily: "Rubik-Medium",
        color: "black",
        // height:30,
        fontSize: 14,
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
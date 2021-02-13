import React, { useState } from 'react'
import { FlatList, View, StyleSheet, Text, Modal, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
// import { Picker } from '@react-native-picker/picker';

const ICustomPicker = (props) => {

    const {
        placeholder,
        formikProps,
        name,
        label,
        wrapperStyle,
        value,
        labelStyle,
        secureTextEntry,
        options,
        onChange,
    } = props

    const [modalActive, setModalActive] = useState(false)
    const isError = formikProps ?.touched[name] && formikProps ?.errors[name] ? true : false

    const handleSelect = (item) => {
        setModalActive(false)
        if (onChange) {
            onChange(item)
        } else {
            formikProps.setFieldValue(name, item)
        }


    }
    return (
        <>
            <View style={[style.inputWrapper]}>

                <Text style={[style.label, { color: isError ? "red" : "#636363" }, labelStyle || {}]}>{label}</Text>
                <TouchableOpacity onPress={e => setModalActive(true)}>
                    <View style={[style.box, wrapperStyle || {}]}>
                        <Text style={[style.label, { color: isError ? "red" : "#636363" }]}>
                            {value.label || formikProps ?.values[name].label || "Select"}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>


            <Modal
                visible={modalActive}
                transparent={true}
                animationType="fade"
                onRequestClose={e => setModalActive(false)}
            >
                <TouchableWithoutFeedback onPress={e => setModalActive(false)}>
                    <View style={style.modalWrapper}>
                        <TouchableWithoutFeedback onPress={e => false}>
                            <View style={style.modalInner}>
                                <FlatList
                                    data={options}
                                    keyExtractor={(item, i) => i.toString()}
                                    bounces={false}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({ item }) => (
                                        <TouchableWithoutFeedback onPress={e => handleSelect(item)}>
                                            <Text style={style.item}>{item.label}</Text>
                                        </TouchableWithoutFeedback>
                                    )}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            {formikProps && formikProps ?.touched[name] && formikProps ?.errors[name] && (
                <Text style={style.error}>
                    {formikProps ?.errors[name]}
                </Text>
            )}

        </>
    );
}

export default ICustomPicker

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
        // marginBottom: 10,
        // borderBottomWidth: 0.5,
        // borderBottomColor: "#AEAEAE",
    },

    input: {
        // backgroundColor:"red",
        // borderBottomWidth: 1,
        // borderBottomColor: "grey",
        // borderBottomWidth: 0.5,
        // borderBottomColor: "#AEAEAE",
        padding: 0,
        fontFamily: "Rubik-Medium",
        color: "black"
        // height:30,
        // fontSize:14,
        // fontWeight: "bold"
    },
    modalWrapper: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center"
    },
    box: {
        marginVertical: 5,
        borderRadius: 10,
        backgroundColor: "#0000000F",
        padding: 9,
        paddingLeft: 12
    },
    modalInner: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        width: "80%",
        maxHeight: "40%",
        // height: 300,
        backgroundColor: "white"
    },
    item: {
        paddingVertical: 6,
    }

})
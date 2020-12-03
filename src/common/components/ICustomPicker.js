import React, { useState } from 'react'
import { FlatList,View, StyleSheet, Text, Modal, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
// import { Picker } from '@react-native-picker/picker';

const ICustomPicker = (props) => {

    const {
        placeholder,
        formikProps,
        name,
        label,
        // style,
        secureTextEntry,
        options
    } = props

    const [modalActive, setModalActive] = useState(false)
    const isError = formikProps.touched[name] && formikProps.errors[name] ? true : false

    const handleSelect = (item) => {
        formikProps.setFieldValue(name,item)
        setModalActive(false)
    }
    return (
        <>
            <View style={[style.inputWrapper]}>
                <TouchableOpacity onPress={e => setModalActive(true)}>
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
                        value={formikProps.values[name].label}
                        secureTextEntry={secureTextEntry || false}
                        placeholder={"Select"}
                        placeholderTextColor="black"
                        {...props}
                    />
                </TouchableOpacity>
            </View>

            {/* <CheckBox checkboxTickColor="red" checked={checked} onPress={e => setChecked(!checked)} /> */}
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
                                keyExtractor={(item,i) => i.toString()}
                                bounces={false}
                                showsVerticalScrollIndicator={false}
                                renderItem={({item}) => (
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
            {formikProps.touched[name] && formikProps.errors[name] && (
                <Text style={style.error}>
                    {formikProps.errors[name]}
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
        marginBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: "#AEAEAE",
    },

    input: {
        // backgroundColor:"red",
        // borderBottomWidth: 1,
        // borderBottomColor: "grey",
        // borderBottomWidth: 0.5,
        // borderBottomColor: "#AEAEAE",
        padding: 0,
        fontFamily: "Rubik-Medium",
        color:"black"
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
    modalInner: {
        paddingHorizontal:15,
        paddingVertical:20,
        width: "80%",
        maxHeight:"40%",
        // height: 300,
        backgroundColor: "white"
    },
    item: {
        paddingVertical: 6,
    }

})
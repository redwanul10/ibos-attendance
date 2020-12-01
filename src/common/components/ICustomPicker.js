import React, { useState } from 'react'
import { View, StyleSheet, Text, Modal, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { Picker } from '@react-native-picker/picker';

const ICustomPicker = (props) => {

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

    return (
        <>
            <View style={[style.inputWrapper, { borderBottomWidth: 1, borderBottomColor: "grey" }]}>
                <TouchableOpacity onPress={e => setModalActive(true)}>
                    <Text style={[style.label, { color: isError ? "red" : "#636363" }]}>{label}</Text>
                    <TextInput
                        editable={false}
                        style={[style.input,]}
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
                </TouchableOpacity>
                {/* <Picker
                    //   selectedValue={this.state.language}
                    itemStyle={{ fontSize: 12, color: "red" }}
                    style={{ height: 30, width: "100%", fontSize: 12 }}
                //   onValueChange={(itemValue, itemIndex) =>
                //     this.setState({language: itemValue})
                //   }
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker> */}
            </View>

            {/* <CheckBox checkboxTickColor="red" checked={checked} onPress={e => setChecked(!checked)} /> */}
            <Modal
                visible={modalActive}
                transparent={true}
                animationType="fade"
                onRequestClose={e => setModalActive(false)}
                style={{ margin: 0 }}
            // presentationStyle="formSheet"
            >
                <TouchableWithoutFeedback onPress={e => setModalActive(false)}>
                    <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", alignItems: "center" }}>
                        <TouchableWithoutFeedback onPress={e => false}>
                            <View style={{ width: 300, height: 300, backgroundColor: "white" }}>
                                <Text>Modal</Text>
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